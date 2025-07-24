# 🚀 Chepoline - Sistema de Planes

Sistema completo de gestión de planes con panel de administrador y vista de cliente.

## 📋 Características

### 🌐 Sistema de Rutas
- **`/`** - Vista de cliente (acceso directo)
- **`/admin`** - Panel de administrador (requiere login)

### 👤 Vista de Cliente
- Visualización de planes sin opciones de edición
- Selección de planes y servicios adicionales
- Proceso de compra completo
- Botón de contacto flotante

### 👨‍💼 Panel de Administrador
- Login con credenciales
- Editor completo de planes
- Configuración de servicios adicionales
- Configuración de información de contacto
- Persistencia de datos en localStorage

## 🔧 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
```bash
# Si tienes git
git clone [URL_DEL_PROYECTO]
cd chepoline

# O simplemente descargar y extraer el ZIP
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
- Vista de cliente: `http://localhost:5173/`
- Panel admin: `http://localhost:5173/admin`

## 🔐 Credenciales de Administrador

- **Usuario:** `admin`
- **Contraseña:** `admin123`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AdminLogin.jsx      # Login de administrador
│   ├── AdminPanel.jsx      # Panel completo de admin
│   └── ClientView.jsx      # Vista de cliente
├── App.jsx                 # Enrutamiento principal
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **React Router DOM** - Enrutamiento
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **Vite** - Bundler y servidor de desarrollo

## 📱 Funcionalidades

### Vista de Cliente
- ✅ Visualización de planes
- ✅ Selección de opciones personalizables
- ✅ Servicios adicionales
- ✅ Cálculo dinámico de precios
- ✅ Botón de contacto flotante
- ✅ Proceso de compra

### Panel de Administrador
- ✅ Gestión completa de planes
- ✅ Editor de características y opciones
- ✅ Configuración de servicios adicionales
- ✅ Configuración de información de contacto
- ✅ Persistencia automática de datos

## 🔄 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de producción
```

## 🚀 Despliegue

### 📋 Configuración de Servidor

**IMPORTANTE:** Para que las rutas funcionen en producción, necesitas configurar tu servidor:

#### 🔹 Vercel
- ✅ Archivo `vercel.json` incluido
- ✅ Configuración automática

#### 🔹 Netlify  
- ✅ Archivo `netlify.toml` incluido
- ✅ Archivo `_redirects` incluido

#### 🔹 Apache
- ✅ Archivo `.htaccess` incluido
- ✅ Sube todo el contenido de `dist/`

#### 🔹 Nginx
Agrega esta configuración:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Netlify (Recomendado)

#### Despliegue Automático desde GitHub:

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta al equipo de desarrollo.

---

**© 2024 Chepoline - Soluciones digitales elegantes**