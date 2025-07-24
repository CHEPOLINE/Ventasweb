# 🚀 Guía Completa de Despliegue - Chepoline

## 🚨 PROBLEMA COMÚN: Error 404 en /admin

### ❌ **Por qué ocurre:**
Las aplicaciones React (SPA) manejan las rutas en el cliente, pero cuando accedes directamente a `/admin` o refrescas la página, el servidor busca un archivo físico que no existe.

### ✅ **Solución:**
Configurar el servidor para que redirija todas las rutas a `index.html` y deje que React Router maneje la navegación.

---

## 📁 Archivos de Configuración Incluidos

### 🔹 **Vercel** (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/admin", "destination": "/" },
    { "source": "/admin/(.*)", "destination": "/" },
    { "source": "/((?!api/.*).*)", "destination": "/" }
  ]
}
```

### 🔹 **Netlify** (`netlify.toml` + `_redirects`)
```toml
[[redirects]]
  from = "/admin"
  to = "/index.html"
  status = 200
```

### 🔹 **Apache** (`.htaccess`)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### 🔹 **Nginx**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🛠️ Pasos de Despliegue

### 1️⃣ **Construir el Proyecto**
```bash
npm run build
```

### 2️⃣ **Subir Archivos**
- Sube TODO el contenido de la carpeta `dist/`
- Incluye los archivos de configuración (`.htaccess`, `_redirects`, etc.)

### 3️⃣ **Verificar Rutas**
- ✅ `tu-dominio.com/` → Vista de cliente
- ✅ `tu-dominio.com/admin` → Login de administrador

---

## 🎯 Plataformas Recomendadas

### 🥇 **Vercel** (Más Fácil)
1. Conecta tu repositorio GitHub
2. Vercel detecta automáticamente el `vercel.json`
3. Deploy automático ✅

### 🥈 **Netlify** (Muy Buena)
1. Arrastra la carpeta `dist/` a Netlify
2. O conecta tu repositorio GitHub
3. Los archivos `_redirects` y `netlify.toml` se aplican automáticamente ✅

### 🥉 **Hosting Tradicional** (Apache/Nginx)
1. Sube el contenido de `dist/` vía FTP
2. Asegúrate de que `.htaccess` esté incluido
3. Configura el servidor si es necesario

---

## ✅ Verificación Final

Después del despliegue, prueba:

1. **Navegación normal:** `tu-dominio.com` → Clic en enlaces
2. **Acceso directo:** Escribe `tu-dominio.com/admin` en el navegador
3. **Refresh:** Estando en `/admin`, refresca la página (F5)

**Si todo funciona sin errores 404, ¡el despliegue fue exitoso!**

---

## 🆘 Solución de Problemas

### ❌ **Sigue apareciendo 404:**
1. Verifica que el archivo de configuración esté en la ubicación correcta
2. Revisa los logs del servidor
3. Contacta al soporte de tu hosting

### ❌ **Funciona en desarrollo pero no en producción:**
1. Asegúrate de hacer `npm run build`
2. Sube la carpeta `dist/`, no `src/`
3. Verifica que los archivos de configuración estén incluidos

### ❌ **Las rutas funcionan pero los assets no cargan:**
1. Verifica la configuración de `base` en `vite.config.js`
2. Asegúrate de que las rutas de assets sean relativas

---

**🎉 ¡Con esta configuración, tu aplicación funcionará perfectamente en producción!**