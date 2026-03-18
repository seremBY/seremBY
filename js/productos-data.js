/**
 * Datos de productos generados a partir de las carpetas en img/
 * Puedes editar nombre, descripcion, tela, tallas y precio según cada producto.
 */
const PRODUCTOS_DATA = {
  ivory: {
    id: "ivory",
    carpeta: "IVORY",
    categoria: "conjuntos",
    nombre: "Conjunto Ivory",
    descripcion: "Conjunto  que combina soporte y delicados detalles para un look femenino y cómodo. Brasier con varilla y copa media, con cargaderas graduables y removibles y broche ajustable que permite adaptarse perfectamente al contorno. Panty en polilicra con refuerzo interno en algodón en la zona íntima y laterales en encaje que aportan un toque delicado y elegante",
    tela: "Polilicra",
    tallas: "S · M · L · XL ",
    precio: "₡ 10.500",
    colores: [
      { id: "beige", nombre: "Beige" },
      { id: "azul", nombre: "Azul" },
      { id: "celeste", nombre: "Celeste" }
    ],
    imagenes: {
      beige: ["beige.jpg", "beige1.jpg", "beige2.jpg", "beige3.jpg"],
      azul: ["azul.jpg", "azul1.jpg", "azul2.jpg", "azul3.jpg"],
      celeste: ["celeste.jpg", "celeste1.jpg", "celeste2.jpg", "celeste3.jpg"]
    }
  },
  bruma: {
    id: "bruma",
    carpeta: "BRUMA",
    categoria: "conjuntos",
    nombre: "Conjunto Bruma",
    descripcion: "Conjunto  que combina soporte y delicados detalles para un look femenino y cómodo. Brasier con varilla y copa media, con cargaderas graduables y removibles y broche ajustable que permite adaptarse perfectamente al contorno. Panty en polilicra con refuerzo interno en algodón en la zona íntima y laterales en encaje que aportan un toque delicado y elegante",
    tela: "Polilicra",
    tallas: "S · M · L · XL ",
    precio: "₡ 10.500",
    colores: [
      { id: "celeste", nombre: "Celeste" },
      { id: "rosa", nombre: "Rosa" }
    ],
    imagenes: {
      celeste: ["flor1.jpg", "flor2.jpg", "flor3.jpg", "flor4.jpg"],
      rosa: ["rosa1 (1).jpg", "rosa1 (5).jpg", "rosa2.jpg", "rosa3.jpg", "rosa4.jpg"]
    }
  },
  delia: {
    id: "delia",
    carpeta: "DELIA",
    categoria: "conjuntos",
    nombre: "Conjunto Delia",
    descripcion: "Conjunto que combina la delicadeza del encaje con la ligereza del mallatex para un diseño femenino y cómodo. Top en encaje y mallatex con cargaderas ajustables que brindan un ajuste práctico y confortable. Panty en polilicra con refuerzo interno en algodón en la zona íntima y laterales en encaje que aportan un toque delicado y elegante.",
    tela: "Encaje y Mallatexcon",
    tallas: "S · M · L · XL ",
    precio: "₡ 10.500",
    colores: [{ id: "blanco", nombre: "Blanco" }],
    imagenes: {
      blanco: ["blanco1.jpg", "blanco2.jpg", "blanco3.jpg", "blanco4.jpg"]
    }
  },
  eclipse: {
    id: "eclipse",
    carpeta: "ECLIPSE",
    categoria: "conjuntos",
    nombre: "Conjunto Eclipse",
    descripcion: "Conjunto diseñado para brindar soporte, comodidad y un ajuste favorecedor. Brasier con varilla y copa media, forrado en la misma tela, con cargaderas graduables y removibles y broche ajustable que permite adaptarse perfectamente al contorno. Panty en polilicra con refuerzo interno en algodón, costura en zigzag y delicado acabado en sesgo en mora que aporta suavidad y comodidad.",
    tela: "Polilicra",
    tallas: "S · M · L · XL ",
    precio: "₡ 10.500",
    colores: [
      { id: "azul", nombre: "Azul" },
      { id: "blanco", nombre: "Blanco" },
      { id: "rosa", nombre: "Rosa" }
    ],
    imagenes: {
      azul: ["azul1.jpg", "azul2.jpg", "azul3.jpg", "azul4.jpg"],
      blanco: ["blanco1.jpg", "blanco2.jpg", "blanco3.jpg", "blanco4.jpg"],
      rosa: ["rosa1.jpg", "rosa2.jpg", "rosa3.jpg", "rosa4.jpg"]
    }
  },
  esencial: {
    id: "esencial",
    carpeta: "ESENCIAL",
    categoria: "conjuntos",
    nombre: "Conjunto Esencial",
    descripcion: "Conjunto ideal para quienes buscan comodidad sin perder estilo.Top con cargaderas y elástico en contorno para un ajuste cómodo y seguro. Panty con refuerzo interno en algodón y delicado acabado en sesgo que brinda mayor suavidad y confor",
    tela: "Algodón Licrado",
    tallas: "S · M · L · XL ",
    precio: "₡ 7.500",
    colores: [
      { id: "blanco", nombre: "Blanco" },
      { id: "negro", nombre: "Negro" },
      { id: "rojo", nombre: "Rojo" }
    ],
    imagenes: {
      blanco: ["blanco (1).jpg", "blanco (2).jpg", "blanco (3).jpg"],
      negro: ["negro (1).jpg", "negro (2).jpg", "negro (3).jpg", "negro (4).jpg"],
      rojo: ["rojo (1).jpg", "rojo (2).jpg", "rojo (3).jpg", "rojo (4).jpg"]
    }
  },
  nuit: {
    id: "nuit",
    carpeta: "NUIT",
    categoria: "conjuntos",
    nombre: "Conjunto Nuit",
    descripcion: "Conjunto que combina ligereza y suavidad para un look cómodo y delicado. Brasier con tela doble para mayor cobertura, cargaderas graduables y broche ajustable que permite adaptarse perfectamente al contorno. Panty en mallatex con refuerzo interno en algodón en la zona íntima, costura en zigzag y delicado acabado en sesgo en mora que aporta suavidad y confort.",
    tela: "Mallatex",
    tallas: "S · M · L · XL ",
    precio: "₡ 10.500",
    colores: [
      { id: "cafe", nombre: "Café" },
      { id: "celeste", nombre: "Celeste" },
      { id: "rojo", nombre: "Rojo" },
      { id: "rosa", nombre: "Rosa" }
    ],
    imagenes: {
      cafe: ["cafe (1).jpg", "cafe (2).jpg", "cafe (3).jpg"],
      celeste: ["celeste (1).jpg", "celeste (2).jpg", "celeste (3).jpg", "celeste (4).jpg"],
      rojo: ["rojo (1).jpg", "rojo (2).jpg", "rojo (3).jpg", "rojo (4).jpg"],
      rosa: ["rosa (1).jpg", "rosa (2).jpg", "rosa (3).jpg"]
    }
  },
  rose: {
    id: "rose",
    carpeta: "ROSE",
    categoria: "conjuntos",
    nombre: "Conjunto Rosé",
    descripcion: "Conjunto  que combina suavidad y soporte para un ajuste cómodo y seguro. Brasier con varilla, cargaderas graduables y removibles, y broche ajustable que permite adaptarse perfectamente al contorno. Panty en algodón con refuerzo interno en la zona íntima, costura en zigzag y delicado acabado en sesgo en mora que aporta mayor comodidad.",
    tela: "Algodón",
    tallas: "S · M · L · XL ",
    precio: "₡ 10.500",
    colores: [
      { id: "celeste", nombre: "Celeste (Flores)" },
      { id: "negro", nombre: "Negro" },
      { id: "rojo", nombre: "Rojo" }
    ],
    imagenes: {
      celeste: ["azul (1).jpg", "azul (2).jpg", "azul (3).jpg", "azul (4).jpg"],
      negro: ["negro (1).jpg", "negro (2).jpg", "negro (3).jpg", "negro (4).jpg"],
      rojo: ["rojo (1).jpg", "rojo (2).jpg", "rojo (3).jpg", "rojo (4).jpg"]
    }
  },
  "p2": {
    id: "p2",
    carpeta: "2",
    categoria: "conjuntos",
    nombre: "Conjunto Desire",
    descripcion: "Conjuntocon delicados detalles que aportan un estilo femenino y moderno. Top en polilicra con encaje en la parte frontal y broche delantero que permite un ajuste práctico y cómodo. Panty en polilicra con refuerzo interno en algodón en la zona íntima, costura en zigzag y delicado acabado en sesgo en mora que brinda mayor suavidad y confort.",
    tela: "Polilicra",
    tallas: "S · M · L · XL ",
    precio: "₡ 8.500",
    colores: [{ id: "blanco", nombre: "Blanco" }],
    imagenes: {
      blanco: ["blanco (1).jpg", "blanco (2).jpg", "blanco (3).jpg", "blanco (4).jpg"]
    }
  },
  "p3": {
    id: "p3",
    carpeta: "3",
    categoria: "conjuntos",
    nombre: "Conjunto Aura",
    descripcion: "Pieza esencial con diseño minimalista. Perfecta para combinar con todo.",
    tela: "Mallatex",
    tallas: " ÚNICO S ",
    precio: "₡ 8.500",
    colores: [{ id: "negro", nombre: "Negro" }],
    imagenes: {
      negro: ["negro (1).jpg", "negro (2).jpg", "negro (3).jpg", "negro (4).jpg"]
    }
  },
  "p4": {
    id: "p4",
    carpeta: "4",
    categoria: "conjuntos",
    nombre: "Conjunto Sereniti",
    descripcion: "Conjunto diseñado para brindar soporte, comodidad y un ajuste favorecedor. Brasier con varilla y copa media, forrado en la misma tela, con cargaderas graduables y removibles y broche ajustable que permite adaptarse perfectamente al contorno. Panty en polilicra con refuerzo interno en algodón, costura en zigzag y delicado acabado en sesgo en mora que aporta suavidad y comodidad.",
    tela: "Polilicra",
    tallas: "S · M · L · XL ",
    precio: "₡ 10.500",
    colores: [
      { id: "azul", nombre: "Azul" },
      { id: "blanco", nombre: "Blanco" },
      { id: "negro", nombre: "Negro" }
    ],
    imagenes: {
      azul: ["azul (1).jpg", "azul (2).jpg", "azul (3).jpg", "azul (4).jpg"],
      blanco: ["blanco (1).jpg", "blanco (2).jpg", "blanco (3).jpg", "blanco (4).jpg"],
      negro: ["negro (1).jpg", "negro (2).jpg", "negro (3).jpg", "negro (4).jpg"]
    }
  },
  "sin-nombre-1": {
    id: "sin-nombre-1",
    carpeta: "SIN NOMBRE1",
    categoria: "conjuntos",
    nombre: "Conjuto Daisy",
    descripcion: "Conjunto con delicados detalles en encaje que aportan un diseño moderno y versátil. Top en polilicra con cargaderas graduables y encaje en la parte delantera que añade un toque sutil y elegante. Panty en polilicra con refuerzo interno en algodón en la zona íntima, costura en zigzag y acabado en sesgo en mora que ofrece un ajuste suave y confortable.",
    tela: "Polilicra",
    tallas: "S · M · L ",
    precio: "₡ 8.500",
    colores: [{ id: "blanco", nombre: "Blanco" }],
    imagenes: {
      blanco: ["blanco (1).jpg", "blanco (2).jpg", "blanco (3).jpg", "blanco (4).jpg", "blanco (5).jpg"]
    }
  },
  "luna": {
    id: "luna",
    carpeta: "LUNA",
    categoria: "conjuntos",
    nombre: "Conjuto Luna",
    descripcion: "Conjunto de ropa interior en delicada malla tipo encaje con diseño geométrico. El top cuenta con copas suaves y cargaderas ajustables que brindan comodidad y un ajuste perfecto. Panty a juego en tela semitransparente con acabado delicado que aporta un toque moderno y femenino. Ideal para quienes buscan un estilo sofisticado y cómodo al mismo tiempo.",
    tela: "Encaje Mallatex",
    tallas: " ÚNICO S ",
    precio: "₡ 8.500",
    colores: [{ id: "negro", nombre: "Negro" }],
    imagenes: {
      negro: ["negro1.jpg", "negro2.jpg", "negro3.jpg", "negro4.jpg"]
    }
  },
  bralette: {
    id: "bralette",
    carpeta: "Bralette",
    categoria: "bralette",
    nombre: "Bralette",
    descripcion: "Bralette cómodo y delicado, ideal para combinar o usar como pieza destacada. Diseño minimalista.",
    tela: "Encaje",
    tallas: "Unitalla",
    precio: "₡ 3.000",
    colores: [{ id: "default", nombre: "Principal" }],
    imagenes: {
      default: ["bralette (1).jpg", "bralette (2).jpg", "bralette (3).jpg", "bralette (4).jpg"]
    }
  },
  tangas: {
    id: "tangas",
    carpeta: "Tangas",
    categoria: "tangas",
    nombre: "Tangas",
    descripcion: "Tangas cómodas y con estilo. Diseño que combina funcionalidad y estética.",
    tela: "Invisible",
    tallas: "Única · S · M · L · XL ",
    precio: "₡ 2.000",
    colores: [{ id: "default", nombre: "Principal" }],
    imagenes: {
      default: ["tanga (1).jpg", "tanga (2).jpg", "tanga (3).jpg", "tanga (4).jpg", "tanga (5).jpg"]
    }
  }
};
