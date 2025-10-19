# 🚀 Guía de Despliegue - Nordic Globe Website

## Opciones de Despliegue Gratuito

### 1. 🌟 Netlify (Recomendado - Más Fácil)

#### Opción A: Drag & Drop
1. Ve a [netlify.com](https://netlify.com)
2. Regístrate con tu email (es gratis)
3. Arrastra toda la carpeta `NordicGlobe-Web` a la zona de "Deploy"
4. ¡Tu sitio estará online en segundos!

#### Opción B: GitHub Integration
1. Sube tu código a GitHub (ver sección GitHub Pages)
2. Conecta tu repositorio con Netlify
3. Netlify detectará automáticamente la configuración

**URL resultante:** `https://tu-sitio.netlify.app`

### 2. 📦 Vercel (Muy Rápido)

1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con GitHub
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un sitio estático

**URL resultante:** `https://tu-sitio.vercel.app`

### 3. 🐙 GitHub Pages (Gratuito)

#### Paso a paso:
1. **Crear repositorio en GitHub:**
   - Ve a [github.com](https://github.com)
   - Crea una cuenta si no tienes
   - Haz clic en "New repository"
   - Nombre: `nordic-globe-website`
   - Marca "Public"
   - Haz clic en "Create repository"

2. **Subir archivos:**
   ```bash
   # En la terminal, navega a tu carpeta del proyecto
   cd "NordicGlobe-Web"
   
   # Inicializar git
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer commit
   git commit -m "Initial commit - Nordic Globe Website"
   
   # Conectar con GitHub (reemplaza TU_USUARIO)
   git remote add origin https://github.com/TU_USUARIO/nordic-globe-website.git
   
   # Subir archivos
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Haz clic en "Settings"
   - Scroll hasta "Pages"
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona "main" branch
   - Haz clic en "Save"

**URL resultante:** `https://TU_USUARIO.github.io/nordic-globe-website`

## 🔧 Configuración Adicional

### Dominio Personalizado (Opcional)
Si tienes un dominio como `nordicglobe.fi`:

1. **En Netlify:**
   - Ve a "Domain settings"
   - Agrega tu dominio personalizado
   - Configura los DNS según las instrucciones

2. **En Vercel:**
   - Ve a "Domains"
   - Agrega tu dominio
   - Configura los registros DNS

### Variables de Entorno (Si necesitas)
Para configurar el chatbot AI o analytics:

1. **Netlify:**
   - Ve a "Site settings" > "Environment variables"
   - Agrega las variables necesarias

2. **Vercel:**
   - Ve a "Settings" > "Environment Variables"
   - Agrega las variables

## 📱 Pruebas

### Antes del despliegue:
```bash
# Instalar dependencias
npm install

# Probar localmente
npm start
```

### Después del despliegue:
1. Abre la URL de tu sitio
2. Prueba todas las páginas
3. Verifica que el formulario de contacto funcione
4. Prueba en móvil y desktop

## 🎯 URLs Finales

Una vez desplegado, tendrás URLs como:
- **Netlify:** `https://nordic-globe-website.netlify.app`
- **Vercel:** `https://nordic-globe-website.vercel.app`
- **GitHub Pages:** `https://yassinfennir.github.io/nordic-globe-website`

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en la plataforma de despliegue
2. Verifica que todos los archivos se subieron correctamente
3. Asegúrate de que `index.html` esté en la raíz del proyecto

## 🎉 ¡Listo!

Tu sitio web estará online y tu cliente podrá verlo desde cualquier lugar del mundo.
