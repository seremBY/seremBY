/**
 * Genera las cards del catálogo dinámicamente a partir de PRODUCTOS_DATA.
 * Mantiene el mismo diseño y redirige a detalle.html con producto y color.
 */

// Mapa de color id -> hex para los puntos de color (puedes ampliarlo)
const COLOR_HEX = {
  beige: "#e8dccb",
  azul: "#1c2b4a",
  celeste: "#c7dbea",
  negro: "#2d2d2d",
  blanco: "#f5f5f5",
  rosa: "#e8b4b8",
  rojo: "#a83a3a",
  flor: "#d4a5a5",
  cafe: "#8b6914",
  default: "#b08968"
};

function getColorHex(colorId) {
  return COLOR_HEX[colorId] || "#b08968";
}

function getFirstImage(producto) {
  const firstColor = producto.colores[0].id;
  const files = producto.imagenes[firstColor];
  const carpeta = producto.carpeta;
  return `../img/${encodeURIComponent(carpeta)}/${encodeURIComponent(files[0])}`;
}

function esUnaImagenPorCard(producto) {
  return producto.categoria === "bralette" || producto.categoria === "tangas";
}

function renderCards() {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  const productos = Object.values(PRODUCTOS_DATA);
  const selectedColors = {}; // productoId -> colorId

  productos.forEach(function (producto) {
    const categoria = producto.categoria || "conjuntos";

    if (esUnaImagenPorCard(producto)) {
      var imagenes = producto.imagenes[producto.colores[0].id] || producto.imagenes.default;
      if (!imagenes || !imagenes.length) return;
      var carpeta = producto.carpeta;
      var basePath = "../img/" + encodeURIComponent(carpeta) + "/";

      imagenes.forEach(function (fileName, index) {
        var card = document.createElement("div");
        card.className = "product-card";
        card.dataset.productoId = producto.id;
        card.dataset.categoria = categoria;

        var link = document.createElement("a");
        link.href = "detalle.html?producto=" + encodeURIComponent(producto.id) + "&imagen=" + encodeURIComponent(fileName);

        var img = document.createElement("img");
        img.src = basePath + encodeURIComponent(fileName);
        img.alt = producto.nombre;
        img.className = "product-image";
        img.id = "img-" + producto.id + "-" + index;
        link.appendChild(img);

        var h3 = document.createElement("h3");
        h3.textContent = producto.nombre;
        var price = document.createElement("span");
        price.className = "price";
        price.textContent = producto.precio;

        card.appendChild(link);
        card.appendChild(h3);
        card.appendChild(price);

        link.addEventListener("click", function (e) {
          e.preventDefault();
          window.location.href = "detalle.html?producto=" + encodeURIComponent(producto.id) + "&imagen=" + encodeURIComponent(fileName);
        });

        grid.appendChild(card);
      });
      return;
    }

    var firstColorId = producto.colores[0].id;
    selectedColors[producto.id] = firstColorId;

    var mainImagePath = getFirstImage(producto);
    var card = document.createElement("div");
    card.className = "product-card";
    card.dataset.productoId = producto.id;
    card.dataset.categoria = categoria;

    var link = document.createElement("a");
    link.href = "detalle.html?producto=" + encodeURIComponent(producto.id) + "&color=" + encodeURIComponent(firstColorId);

    var img = document.createElement("img");
    img.src = mainImagePath;
    img.alt = producto.nombre;
    img.className = "product-image";
    img.id = "img-" + producto.id;
    link.appendChild(img);

    var h3 = document.createElement("h3");
    h3.textContent = producto.nombre;
    var price = document.createElement("span");
    price.className = "price";
    price.textContent = producto.precio;

    var colorsDiv = document.createElement("div");
    colorsDiv.className = "colors";

    producto.colores.forEach(function (c, index) {
      var span = document.createElement("span");
      span.className = "color";
      span.dataset.colorId = c.id;
      span.dataset.productoId = producto.id;
      span.style.backgroundColor = getColorHex(c.id);
      if (index === 0) span.classList.add("active");
      span.setAttribute("aria-label", c.nombre);
      span.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        selectedColors[producto.id] = c.id;
        var cardImg = document.getElementById("img-" + producto.id);
        var files = producto.imagenes[c.id];
        var carpeta = producto.carpeta;
        if (cardImg && files && files[0]) {
          cardImg.src = "../img/" + encodeURIComponent(carpeta) + "/" + encodeURIComponent(files[0]);
        }
        colorsDiv.querySelectorAll(".color").forEach(function (el) { el.classList.remove("active"); });
        span.classList.add("active");
      });
      colorsDiv.appendChild(span);
    });

    card.appendChild(link);
    card.appendChild(h3);
    card.appendChild(price);
    card.appendChild(colorsDiv);

    link.addEventListener("click", function (e) {
      e.preventDefault();
      var color = selectedColors[producto.id];
      window.location.href = "detalle.html?producto=" + encodeURIComponent(producto.id) + "&color=" + encodeURIComponent(color);
    });

    grid.appendChild(card);
  });

  initFiltroCategorias();
  aplicarFiltro("conjuntos");
}

function aplicarFiltro(categoria) {
  const botones = document.querySelectorAll(".btn-categoria");
  const cards = document.querySelectorAll(".product-card");

  botones.forEach(function (b) {
    b.classList.toggle("active", b.dataset.categoria === categoria);
  });
  cards.forEach(function (card) {
    const cardCategoria = card.dataset.categoria;
    const mostrar =
      categoria === "conjuntos" ? cardCategoria === "conjuntos" : cardCategoria === categoria;
    card.style.display = mostrar ? "" : "none";
  });
}

function initFiltroCategorias() {
  const botones = document.querySelectorAll(".btn-categoria");

  botones.forEach(function (btn) {
    btn.addEventListener("click", function () {
      aplicarFiltro(btn.dataset.categoria);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderCards);
