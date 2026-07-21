# Historias de la Tripulación

Plantilla interactiva de libro para contar las historias de origen y trasfondo de cada miembro de tu tripulación pirata.

## 📖 Características

- **Animación de páginas**: Efecto realista de girar páginas de un libro
- **Portada interactiva**: Haz clic en la portada para abrir el libro
- **Navegación fluida**: Botones anteriores/siguientes y controles de teclado
- **Diseño temático**: Estilo medieval/cuento adaptado para historias de villanos
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Contador de páginas**: Ve en qué página estás en tiempo real

## 🎮 Controles

- **Clic en portada**: Abre el libro
- **Botones ❮ ❯**: Navega entre páginas
- **Flechas del teclado**: ← Página anterior, → Página siguiente
- **Clic en siguiente en última página**: Cierra el libro

## 📝 Cómo usar

1. Edita `script.js` y reemplaza los datos de plantilla con tus personajes
2. Para cada personaje, modifica:
   - `Nombre del Personaje`
   - `Rol en la tripulación`
   - La historia/trasfondo
   - Apodo, edad y origen en la sección de información

3. Puedes añadir más páginas duplicando el objeto de página en el array `pages`

## 🎨 Estructura de una página

Cada página es un objeto con dos propiedades:

```javascript
{
  image: "URL de la imagen de fondo",
  content: `HTML del contenido`
}
```

## 🖼️ Cambiar imágenes

Reemplaza las URLs de `i.gyazo.com` con tus propias imágenes:
- Portada
- Imagen de fondo del libro
- Páginas

## 🌐 Desplegar

Este proyecto usa **GitHub Pages**. Para activarlo:

1. Ve a Settings → Pages
2. Selecciona "main" como rama
3. Tu sitio estará disponible en: `https://KenjiTanoshii.github.io/Historias-Tripulacion/`

## 📚 Inspiración

Basado en la estructura de [Tripulación](https://github.com/KenjiTanoshii/Tripulacion), adaptado para contar historias individuales de cada personaje.
