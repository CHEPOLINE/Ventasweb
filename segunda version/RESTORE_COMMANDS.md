# 🔄 Comandos de Restauración - Chepoline

## 🚨 Guía de Emergencia para Restaurar Versiones

---

## 📋 Versiones Disponibles

### v1.0.0 - Versión Base ✅
- Solo funcionalidad básica
- Sin burbuja flotante
- Sin botón de contacto

### v1.1.0 - Con Burbuja Flotante ✅
- Funcionalidad básica
- Burbuja flotante de compra
- Sin botón de contacto

### v1.2.0 - Versión Completa (ACTUAL) ✅
- Funcionalidad básica
- Burbuja flotante de compra
- Botón de contacto con menú

---

## 🔧 Comandos de Restauración

### 1️⃣ Restaurar a Versión Base (v1.0.0)

```bash
# Comando para restaurar App.jsx a versión base
# Elimina: burbuja flotante + botón de contacto
# Mantiene: funcionalidad básica
```

**Características de v1.0.0:**
- ✅ Selección de plan básico
- ✅ Pantalla de opciones adicionales
- ✅ Cálculo de subtotal
- ❌ Sin burbuja flotante
- ❌ Sin botón de contacto

---

### 2️⃣ Restaurar a v1.1.0 (Con Burbuja)

```bash
# Comando para restaurar con burbuja flotante
# Elimina: botón de contacto
# Mantiene: funcionalidad básica + burbuja
```

**Características de v1.1.0:**
- ✅ Selección de plan básico
- ✅ Pantalla de opciones adicionales
- ✅ Cálculo de subtotal
- ✅ Burbuja flotante de compra
- ❌ Sin botón de contacto

---

### 3️⃣ Restaurar a v1.2.0 (Versión Actual)

```bash
# Comando para restaurar versión completa
# Incluye: todo
```

**Características de v1.2.0:**
- ✅ Selección de plan básico
- ✅ Pantalla de opciones adicionales
- ✅ Cálculo de subtotal
- ✅ Burbuja flotante de compra
- ✅ Botón de contacto con menú

---

## 🆘 Restauración de Emergencia

### Si todo se ve en blanco:

1. **Verificar errores en consola**
2. **Restaurar a versión base (v1.0.0)**
3. **Probar funcionalidad básica**
4. **Agregar funcionalidades una por una**

### Si hay errores de JavaScript:

1. **Revisar sintaxis en App.jsx**
2. **Verificar imports correctos**
3. **Comprobar que todas las llaves {} estén cerradas**
4. **Restaurar desde backup si es necesario**

---

## 📊 Estado de Archivos por Versión

| Archivo | v1.0.0 | v1.1.0 | v1.2.0 |
|---------|--------|--------|--------|
| `src/App.jsx` | Base | +Burbuja | +Contacto |
| `src/index.css` | Base | +Animación | Sin cambios |
| `index.html` | Base | Sin cambios | Sin cambios |
| `package.json` | Base | Sin cambios | Sin cambios |

---

## 🔍 Verificación Post-Restauración

### ✅ Checklist después de restaurar:

- [ ] La página carga sin errores
- [ ] No hay errores en consola del navegador
- [ ] El plan básico se muestra correctamente
- [ ] La selección de plan funciona
- [ ] Las opciones adicionales aparecen
- [ ] El cálculo de subtotal es correcto
- [ ] (v1.1.0+) La burbuja flotante aparece
- [ ] (v1.2.0) El botón de contacto funciona

---

## 📞 Soporte

**Si necesitas ayuda con la restauración:**
- Consulta este archivo primero
- Verifica el CHANGELOG.md
- Revisa VERSION_BACKUP.md
- Solicita asistencia técnica si es necesario