import React, { useState } from 'react';
import { ShoppingCart, Check, MessageCircle, Phone, Mail, X, Edit3, Plus, Save, Trash2, Upload, FileText, CreditCard, Headphones, Shield, Database, Users, Settings, Zap } from 'lucide-react';

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAdditionalServicesConfig, setShowAdditionalServicesConfig] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [selectedPlanOptions, setSelectedPlanOptions] = useState({});
  const [showEditMenu, setShowEditMenu] = useState(null);
  const [showContactConfig, setShowContactConfig] = useState(false);

  // Estados para configuración de contacto
  const [contactConfig, setContactConfig] = useState({
    menuTitle: '¿Necesitas ayuda?',
    menuSubtitle: 'Nuestros asesores están listos para ayudarte',
    whatsappNumber: '573001234567',
    phoneNumber: '573001234567',
    email: 'contacto@chepoline.com.co',
    schedule: 'Lun - Vie 8:00 AM - 6:00 PM'
  });

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: 'Plan Básico',
      price: 50000,
      description: 'Perfecto para empezar tu transformación digital',
      optionType: 'fixed',
      features: ['Gestión básica', 'Soporte email', 'Actualizaciones'],
      selectableOptions: [],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Plan Personalizable',
      price: 0,
      description: 'Arma tu plan ideal seleccionando solo lo que necesitas',
      optionType: 'selectable',
      features: [],
      selectableOptions: [
        { id: 1, name: 'Gestión de pacientes', price: 25000, selected: false },
        { id: 2, name: 'Agenda médica', price: 20000, selected: false },
        { id: 3, name: 'Reportes básicos', price: 15000, selected: false },
        { id: 4, name: 'Backup automático', price: 10000, selected: false },
        { id: 5, name: 'Notificaciones SMS', price: 18000, selected: false }
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]);

  const [additionalServices, setAdditionalServices] = useState([
    { id: 1, name: 'Historia clínica electrónica', price: 50000, icon: 'FileText', selected: false },
    { id: 2, name: 'Facturación electrónica', price: 30000, icon: 'CreditCard', selected: false },
    { id: 3, name: 'Soporte premium 24/7', price: 25000, icon: 'Headphones', selected: false }
  ]);

  // Resto de funciones...
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Contenido básico de respaldo */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Chepoline - Versión Respaldo v2.4.17
          </h1>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Versión de Respaldo Cargada
          </h2>
          <p className="text-lg text-gray-600">
            Esta es una versión estable de respaldo. Ahora aplicaremos las mejoras de UX.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;