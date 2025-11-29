# 📘 GUÍA PASO A PASO: Publicar en Wix

## 🎯 Opción Más Fácil: Netlify + Wix

### PASO 1: Desplegar en Netlify (5 minutos)

1. **Ir a Netlify**
   - Abre: https://app.netlify.com/drop
   - NO necesitas crear cuenta para este método

2. **Preparar los archivos**
   - Descarga TODA la carpeta de tu proyecto
   - Asegúrate de tener todos estos archivos:
     ```
     /App.tsx
     /package.json
     /index.html
     /components/ (carpeta completa)
     /styles/ (carpeta completa)
     /public/ (carpeta completa)
     ```

3. **Subir a Netlify**
   - Arrastra la carpeta completa a la zona que dice "Drag and drop"
   - Espera 2-3 minutos mientras se despliega
   - ✅ Netlify te dará una URL como: `https://nombre-random.netlify.app`
   - **COPIA ESTA URL** 📋

---

### PASO 2: Embeder en tu Página Wix

#### Método A: Usando HTML iframe (Recomendado)

1. **Abrir tu Editor de Wix**
   - Entra a tu sitio en Wix
   - Click en "Editar sitio"

2. **Agregar elemento HTML**
   - Click en el botón **"+"** (Agregar elementos)
   - Busca **"Embed"** o **"HTML iframe"**
   - También puede estar en: **Embed & Social** → **HTML iframe**

3. **Configurar el iframe**
   - Click en el elemento que acabas de agregar
   - Click en **"Enter Code"** o **"Configuración"**
   - Pega este código (reemplaza la URL):

   ```html
   <iframe 
     src="https://TU-SITIO.netlify.app" 
     width="100%" 
     height="1200px" 
     frameborder="0"
     scrolling="no"
     style="border:none; overflow:hidden;">
   </iframe>
   ```

4. **Ajustar tamaño**
   - Arrastra el elemento para hacerlo más grande
   - Recomendado: **Ancho completo** de la página
   - **Alto**: 1200px o más (para que se vean todos los efectos)

5. **Publicar**
   - Click en **"Publicar"** en la esquina superior derecha
   - ✅ ¡Listo!

---

#### Método B: Usando Wix Velo (Embed personalizado)

1. **Activar Wix Velo**
   - En el editor de Wix, click en **"Dev Mode"** o **"Modo desarrollador"**
   - Habilita **Wix Velo**

2. **Agregar elemento Custom Element**
   - Click **"+"** → **Embed & Social** → **Custom Element**

3. **Configurar**
   - Tag name: `div`
   - En Source URL, pega: `https://TU-SITIO.netlify.app`

---

## 🎨 CONSEJOS PARA WIX

### ✅ Hacer que se vea bien:

1. **Página completa**
   - Crea una página nueva dedicada solo para los efectos 3D
   - Haz el iframe de ancho completo (100%)

2. **Altura correcta**
   - Usa al menos 1200px de altura
   - Si se corta el contenido, aumenta a 1500px

3. **Fondo**
   - La aplicación ya tiene su propio fondo oscuro
   - Pon el fondo de tu página Wix en negro (#000000) para que combine

4. **Sin scroll doble**
   - En el código del iframe, usa: `scrolling="no"`
   - Esto evita que haya dos barras de scroll

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### ❌ "No se ve nada"
- Verifica que la URL de Netlify funcione (ábrela en una pestaña nueva)
- Asegúrate de copiar la URL completa con `https://`

### ❌ "Se ve cortado"
- Aumenta el `height` del iframe a 1500px o más
- O usa: `height="100vh"` para altura completa de pantalla

### ❌ "No responde al mouse"
- Verifica que el elemento iframe no esté bloqueado en Wix
- Asegúrate que esté "sobre" otros elementos

### ❌ "Tarda mucho en cargar"
- Es normal la primera vez (2-3 segundos)
- Las imágenes se están cargando

---

## 🚀 ALTERNATIVAS A NETLIFY

### Vercel (Igual de fácil)
1. Ve a: https://vercel.com
2. Crea cuenta gratis
3. Click en "New Project"
4. Arrastra tu carpeta
5. Copia la URL que te den
6. Usa la misma guía de Wix de arriba

### GitHub Pages (Requiere GitHub)
1. Sube tu proyecto a GitHub
2. Ve a Settings → Pages
3. Activa GitHub Pages
4. Usa la URL que te den

---

## 📱 HACER RESPONSIVE EN WIX

1. En el editor de Wix, cambia a vista **Mobile**
2. Ajusta el tamaño del iframe para móvil
3. Altura recomendada móvil: 800px

---

## ✨ RESULTADO FINAL

Tu página Wix mostrará:
- ✅ 3 Tarjetas con efecto Flip 3D
- ✅ 2 Tarjetas con inclinación que siguen el cursor
- ✅ 3 Imágenes flotantes rotando
- ✅ 2 Tarjetas con efecto Parallax

Todo completamente interactivo y con tus imágenes personalizadas.

---

## 🆘 ¿NECESITAS AYUDA?

Si algo no funciona:
1. Verifica que la URL de Netlify funcione sola
2. Prueba el código del iframe en: https://www.w3schools.com/html/tryit.asp
3. Revisa que Wix permita iframes en tu plan
