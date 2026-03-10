/**
 * Carga el producto desde la URL (producto, color) y muestra nombre, descripción,
 * tipo de tela, tallas, imagen principal y galería.
 */
(function () {
  const params = new URLSearchParams(window.location.search);
  const productoId = params.get("producto");
  const colorParam = params.get("color");
  const imagenParam = params.get("imagen");

  const producto = productoId ? PRODUCTOS_DATA[productoId] : null;

  if (!producto) {
    document.getElementById("detalle-nombre").textContent = "Producto no encontrado";
    document.querySelector(".detalle-container").style.display = "block";
    return;
  }

  const carpeta = producto.carpeta;
  const basePath = "../img/" + encodeURIComponent(carpeta) + "/";
  const mainImage = document.getElementById("imagen-principal");
  const galleryEl = document.getElementById("gallery");

  var imagenes;
  if (imagenParam && (producto.categoria === "bralette" || producto.categoria === "tangas")) {
    imagenes = [imagenParam];
  } else {
    const colorId = colorParam && producto.imagenes[colorParam]
      ? colorParam
      : producto.colores[0].id;
    imagenes = producto.imagenes[colorId] || producto.imagenes[producto.colores[0].id];
  }

  // Título de la página
  document.title = producto.nombre + " - Detalle del producto";

  // Imagen principal
  if (imagenes && imagenes[0]) {
    mainImage.src = basePath + encodeURIComponent(imagenes[0]);
    mainImage.alt = producto.nombre;
  }

  // Galería (una sola miniatura si es producto de una imagen)
  galleryEl.innerHTML = "";
  if (imagenes && imagenes.length) {
    imagenes.forEach(function (fileName) {
      const img = document.createElement("img");
      img.src = basePath + encodeURIComponent(fileName);
      img.alt = producto.nombre;
      img.addEventListener("click", function () {
        mainImage.src = img.src;
        galleryEl.querySelectorAll("img").forEach(function (i) { i.classList.remove("active"); });
        img.classList.add("active");
      });
      galleryEl.appendChild(img);
    });
    if (galleryEl.querySelector("img")) galleryEl.querySelector("img").classList.add("active");
  }

  // Textos
  document.getElementById("detalle-nombre").textContent = producto.nombre;
  document.getElementById("detalle-precio").textContent = producto.precio;
  document.getElementById("detalle-descripcion").textContent = producto.descripcion;
  document.getElementById("detalle-tela").textContent = producto.tela;
  document.getElementById("detalle-tallas").textContent = producto.tallas;
  document.getElementById("detalle-colores").textContent = producto.colores.map(function (c) { return c.nombre; }).join(", ");

  // WhatsApp
  const btnComprar = document.getElementById("btn-comprar");
  const textoWhatsApp = "Hola, me interesa el " + encodeURIComponent(producto.nombre);
  btnComprar.href = "https://wa.me/50684132300?text=" + encodeURIComponent(textoWhatsApp);

  // Botón volver: regresar a donde estaba el usuario
  const backLink = document.getElementById("detalle-back");
  if (backLink) {
    backLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "catalogo.html";
      }
    });
  }
})();
