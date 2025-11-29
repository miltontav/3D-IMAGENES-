# 🎨 Efectos 3D con Imágenes

Una aplicación web interactiva con múltiples efectos 3D para mostrar imágenes de manera espectacular.

## 🚀 Cómo Publicar en Wix

### Método 1: Usando Netlify (Gratis y Fácil)

1. **Descargar todos los archivos del proyecto**
   - Descarga todos los archivos de esta aplicación

2. **Crear cuenta en Netlify**
   - Ve a [https://www.netlify.com](https://www.netlify.com)
   - Crea una cuenta gratis

3. **Desplegar la aplicación**
   - En Netlify, arrastra la carpeta completa del proyecto
   - Netlify te dará una URL (ejemplo: `https://tu-sitio.netlify.app`)

4. **Embeder en Wix**
   - Entra a tu editor de Wix
   - Click en el botón **"+"** para agregar elemento
   - Busca **"Embed" o "HTML iframe"**
   - Pega este código:
   ```html
   <iframe 
     src="TU_URL_DE_NETLIFY_AQUI" 
     width="100%" 
     height="800px" 
     frameborder="0"
     style="border:none;">
   </iframe>
   ```
   - Reemplaza `TU_URL_DE_NETLIFY_AQUI` con tu URL de Netlify

### Método 2: Usando Vercel (Alternativa)

1. **Crear cuenta en Vercel**
   - Ve a [https://vercel.com](https://vercel.com)
   - Crea una cuenta gratis

2. **Importar proyecto**
   - Click en "New Project"
   - Sube tus archivos
   - Vercel desplegará automáticamente
   - Te dará una URL (ejemplo: `https://tu-sitio.vercel.app`)

3. **Embeder en Wix** (mismo proceso que Netlify)

### Método 3: Solo el código HTML (Para una sola página)

Si solo quieres poner esto en UNA página específica de Wix:

1. En Wix, agrega un elemento **"Embed Code"**
2. Copia todo el código HTML generado
3. Pégalo en el elemento Embed

## 📝 Notas Importantes

- Las imágenes están incluidas en el proyecto
- El iframe debe tener suficiente altura (recomendado: 800px - 1200px)
- Asegúrate de que el iframe sea "responsive" en Wix

## 🎨 Características

- ✨ Tarjetas con Flip 3D
- 🎭 Efecto de Inclinación 3D
- 🎪 Imágenes Flotantes con Rotación
- ✨ Efecto Parallax 3D

## 🛠️ Tecnologías

- React
- Tailwind CSS
- Motion (Framer Motion)
- Vite
