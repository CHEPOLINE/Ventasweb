# 🔄 Respaldos de Versiones - Chepoline

## 📦 Versiones Respaldadas

---

### 📁 v1.0.0 - Versión Base (RESPALDO)

#### `src/App.jsx` - Versión Base
```jsx
import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [additionalServices, setAdditionalServices] = useState([]);

  const plans = [
    {
      id: 1,
      name: 'Plan Básico',
      price: 50000,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const additionalOptions = [
    { id: 1, name: 'Historia clínica electrónica', price: 50000 },
    { id: 2, name: 'Facturación electrónica', price: 50000 },
    { id: 3, name: 'Soporte estándar', price: 50000 }
  ];

  // ... resto del código base sin burbuja ni contacto
}
```

---

### 📁 v1.1.0 - Con Burbuja Flotante (RESPALDO)

#### Cambios agregados en v1.1.0:
- Estado para burbuja flotante
- Componente de burbuja con animación
- Lógica de aparición/ocultación

---

### 📁 v1.2.0 - Con Botón de Contacto (ACTUAL)

#### Cambios agregados en v1.2.0:
- Estado `showContactMenu`
- Funciones de contacto (WhatsApp, teléfono, email)
- Menú desplegable con opciones
- Overlay para cerrar menú

---

## 🔧 Scripts de Reversión Rápida

### Revertir a v1.1.0 (Sin botón de contacto)
```bash
# Eliminar funcionalidades de contacto
# Mantener burbuja flotante
```

### Revertir a v1.0.0 (Versión base)
```bash
# Eliminar burbuja flotante
# Eliminar botón de contacto
# Mantener solo funcionalidad básica
```

---

## 📋 Checklist de Reversión

### ✅ Antes de revertir:
- [ ] Documentar razón de la reversión
- [ ] Hacer backup de versión actual
- [ ] Verificar que no hay cambios sin guardar
- [ ] Notificar a stakeholders si es necesario

### ✅ Después de revertir:
- [ ] Probar funcionalidad básica
- [ ] Verificar que no hay errores en consola
- [ ] Actualizar documentación
- [ ] Confirmar que la reversión fue exitosa

---

## 📞 Contacto para Reversiones

**En caso de emergencia:**
- Usar este archivo para identificar la versión estable
- Aplicar los cambios manualmente si es necesario
- Documentar cualquier problema encontrado