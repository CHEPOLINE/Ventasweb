import React, { useState } from 'react';
import { ShoppingCart, Check, MessageCircle, Phone, Mail, X } from 'lucide-react';

function ClientView() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAdditionalServicesConfig, setShowAdditionalServicesConfig] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [selectedPlanOptions, setSelectedPlanOptions] = useState({});

  // Estados para configuración de contacto (cargados desde localStorage)
  const [contactConfig, setContactConfig] = useState({
    menuTitle: '¿Necesitas ayuda?',
    menuSubtitle: 'Nuestros asesores están listos para ayudarte',
    whatsappNumber: '573001234567',
    phoneNumber: '573001234567',
    email: 'contacto@chepoline.com.co',
    schedule: 'Lun - Vie 8:00 AM - 6:00 PM'
  });

  // Cargar datos del localStorage al iniciar
  React.useEffect(() => {
    const savedPlans = localStorage.getItem('chepoline_plans');
    const savedServices = localStorage.getItem('chepoline_services');
    const savedContact = localStorage.getItem('chepoline_contact');
    
    if (savedPlans) {
      try {
        setPlans(JSON.parse(savedPlans));
      } catch (e) {
        console.error('Error loading plans:', e);
      }
    }
    
    if (savedServices) {
      try {
        setAdditionalServices(JSON.parse(savedServices));
      } catch (e) {
        console.error('Error loading services:', e);
      }
    }
    
    if (savedContact) {
      try {
        setContactConfig(JSON.parse(savedContact));
      } catch (e) {
        console.error('Error loading contact config:', e);
      }
    }
  }, []);

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
    },
    {
      id: 3,
      name: 'Plan Premium Flex',
      price: 0,
      description: 'Máxima flexibilidad con opciones avanzadas',
      optionType: 'selectable',
      features: [],
      selectableOptions: [
        { id: 1, name: 'Telemedicina', price: 45000, selected: false },
        { id: 2, name: 'IA Diagnóstica', price: 60000, selected: false },
        { id: 3, name: 'Integración laboratorios', price: 35000, selected: false },
        { id: 4, name: 'App móvil personalizada', price: 40000, selected: false },
        { id: 5, name: 'Dashboard ejecutivo', price: 30000, selected: false },
        { id: 6, name: 'Soporte 24/7', price: 25000, selected: false }
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Plan Empresarial',
      price: 150000,
      description: 'Solución completa para grandes organizaciones',
      optionType: 'fixed',
      features: [
        'Usuarios ilimitados',
        'Soporte prioritario 24/7',
        'Integración completa',
        'Reportes avanzados',
        'Seguridad empresarial',
        'Capacitación incluida'
      ],
      selectableOptions: [],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]);

  const [additionalServices, setAdditionalServices] = useState([
    { id: 1, name: 'Historia clínica electrónica', price: 50000, icon: 'FileText', selected: false },
    { id: 2, name: 'Facturación electrónica', price: 30000, icon: 'CreditCard', selected: false },
    { id: 3, name: 'Soporte premium 24/7', price: 25000, icon: 'Headphones', selected: false },
    { id: 4, name: 'Seguridad avanzada', price: 40000, icon: 'Shield', selected: false },
    { id: 5, name: 'Base de datos extendida', price: 35000, icon: 'Database', selected: false },
    { id: 6, name: 'Gestión de usuarios', price: 20000, icon: 'Users', selected: false }
  ]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setSelectedPlanOptions(prev => {
      const newState = {};
      Object.keys(prev).forEach(key => {
        if (key.startsWith(`${plan.id}-`)) {
          newState[key] = prev[key];
        }
      });
      return newState;
    });
  };

  const handlePlanOptionToggle = (optionKey, planId, option) => {
    setSelectedPlanOptions(prev => {
      const newState = {};
      Object.keys(prev).forEach(key => {
        if (key.startsWith(`${planId}-`)) {
          newState[key] = prev[key];
        }
      });
      newState[optionKey] = !prev[optionKey];
      return newState;
    });
  };

  const getPlanTotalPrice = (planId) => {
    const plan = plans.find(p => p.id === planId);
    if (!plan) return 0;
    
    const basePrice = plan.optionType === 'selectable' ? 0 : plan.price;
    const selectedOptionsPrice = plan.selectableOptions
      ?.filter(option => selectedPlanOptions[`${planId}-${option.id}`])
      .reduce((sum, option) => sum + option.price, 0) || 0;
    
    return basePrice + selectedOptionsPrice;
  };

  const handleServiceToggle = (service) => {
    setAdditionalServices(prev => prev.map(s => 
      s.id === service.id ? { ...s, selected: !s.selected } : s
    ));
  };

  const getTotalPrice = () => {
    if (!selectedPlan) return 0;
    
    const additionalServicesPrice = additionalServices.filter(service => service.selected).reduce((sum, service) => sum + service.price, 0);
    
    if (selectedPlan.optionType === 'selectable') {
      return getPlanTotalPrice(selectedPlan.id) + additionalServicesPrice;
    } else {
      return selectedPlan.price + additionalServicesPrice;
    }
  };

  const handleContactClick = () => {
    setShowContactMenu(!showContactMenu);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, necesito ayuda con los planes de Chepoline. ¿Podrían asesorarme?');
    window.open(`https://wa.me/${contactConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:+${contactConfig.phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Consulta sobre planes - Chepoline');
    const body = encodeURIComponent('Hola,\n\nMe gustaría recibir más información sobre los planes disponibles.\n\nGracias.');
    window.open(`mailto:${contactConfig.email}?subject=${subject}&body=${body}`, '_self');
  };

  // Pantalla de servicios adicionales
  if (showAdditionalServicesConfig) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Servicios Adicionales
              </h1>
              <button
                onClick={() => setShowAdditionalServicesConfig(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ← Volver
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {additionalServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                    service.selected
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                  onClick={() => handleServiceToggle(service)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">
                        {service.icon === 'FileText' && '📋'}
                        {service.icon === 'CreditCard' && '💳'}
                        {service.icon === 'Headphones' && '🎧'}
                        {service.icon === 'Shield' && '🛡️'}
                        {service.icon === 'Database' && '🗄️'}
                        {service.icon === 'Users' && '👥'}
                        {service.icon === 'Settings' && '⚙️'}
                        {service.icon === 'Zap' && '⚡'}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {service.name}
                        </h3>
                        <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          +${service.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={service.selected}
                        onChange={() => handleServiceToggle(service)}
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2 transition-all"
                      />
                      {service.selected && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    {service.icon === 'FileText' && 'Digitaliza y gestiona historias clínicas de forma segura'}
                    {service.icon === 'CreditCard' && 'Sistema completo de facturación electrónica'}
                    {service.icon === 'Headphones' && 'Soporte técnico disponible las 24 horas'}
                    {service.icon === 'Shield' && 'Protección avanzada para tus datos'}
                    {service.icon === 'Database' && 'Almacenamiento extendido para tu información'}
                    {service.icon === 'Users' && 'Control avanzado de usuarios y permisos'}
                  </div>
                  
                  {service.selected && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Plan Seleccionado
              </h3>
              <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-blue-200 mb-4">
                <div>
                  <span className="text-gray-700 font-medium">{selectedPlan.name}</span>
                  {selectedPlan.optionType === 'selectable' && (
                    <div className="text-sm text-gray-500 mt-1">
                      {selectedPlan.selectableOptions
                        ?.filter(option => selectedPlanOptions[`${selectedPlan.id}-${option.id}`])
                        .map(option => option.name)
                        .join(', ') || 'Sin opciones seleccionadas'}
                    </div>
                  )}
                </div>
                <span className="text-xl font-bold text-blue-600">
                  ${selectedPlan.optionType === 'selectable' 
                    ? getPlanTotalPrice(selectedPlan.id).toLocaleString()
                    : selectedPlan.price.toLocaleString()}
                </span>
              </div>

              {additionalServices.filter(s => s.selected).length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Servicios Seleccionados
                  </h3>
                  <div className="space-y-2">
                    {additionalServices.filter(s => s.selected).map(service => (
                      <div key={service.id} className="flex justify-between items-center">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-blue-600">
                          +${service.price.toLocaleString()}
                        </span>
                      </div>
                    ))}
                    <div className="border-t border-blue-200 pt-2 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-800">Subtotal Servicios:</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          +${additionalServices.filter(s => s.selected).reduce((sum, s) => sum + s.price, 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="border-t border-blue-300 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total Final:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ${getTotalPrice().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <button
                onClick={() => alert('Redirigiendo a PSE...')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Pagar con PSE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Chepoline
            </h1>
          </div>
          <p className="text-blue-600/70 mt-1 font-medium">Soluciones digitales elegantes</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Planes que se adaptan a ti
          </h2>
          <p className="text-base text-blue-600/80 max-w-2xl mx-auto leading-relaxed">
            Descubre la solución perfecta para transformar tu negocio con tecnología de vanguardia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100/50 hover:border-blue-200"
            >
              <div className="relative">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {plan.description}
                </p>
                
                <div className="mb-6 min-h-[140px]">
                  {plan.optionType === 'fixed' ? (
                    <ul className="space-y-3">
                      {plan.features?.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <p className="text-sm text-gray-600 mb-4 font-medium">Opciones personalizables:</p>
                      <div className="space-y-3">
                        {plan.selectableOptions?.slice(0, 3).map((option) => (
                          <div key={option.id} className="flex items-center justify-between text-sm group/option">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id={`plan-${plan.id}-option-${option.id}`}
                                checked={selectedPlanOptions[`${plan.id}-${option.id}`] || false}
                                onChange={() => handlePlanOptionToggle(`${plan.id}-${option.id}`, plan.id, option)}
                                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-3 transition-all hover:border-blue-400"
                              />
                              <label 
                                htmlFor={`plan-${plan.id}-option-${option.id}`}
                                className="text-gray-600 cursor-pointer group-hover/option:text-gray-800 transition-colors"
                              >
                                {option.name}
                              </label>
                            </div>
                            <span className="text-blue-600 font-medium">+${option.price.toLocaleString()}</span>
                          </div>
                        ))}
                        {plan.selectableOptions?.length > 3 && (
                          <p className="text-xs text-gray-500 mt-3">
                            +{plan.selectableOptions.length - 3} opciones más...
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col mt-auto">
                  <div className="border-t border-gray-100 pt-4">
                    <div className="mb-4">
                      {plan.optionType === 'fixed' ? (
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          ${plan.price.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          ${getPlanTotalPrice(plan.id).toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handlePlanSelect(plan)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-100/50 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-gray-600 mb-6">
            Selecciona un plan y personalízalo con servicios adicionales
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-blue-100 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Chepoline
            </h3>
            <p className="text-blue-600/70">Transformando el futuro digital</p>
          </div>
          <p className="text-gray-600 text-sm">&copy; 2024 Chepoline. Todos los derechos reservados.</p>
          <p className="text-blue-600 mt-2 font-medium text-sm">{contactConfig.email}</p>
        </div>
      </footer>

      {selectedPlan && !showAdditionalServicesConfig && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-bounce-in z-40 border border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="ml-3 text-sm font-medium text-gray-600">Plan seleccionado</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold text-gray-800">{selectedPlan.name}</h3>
            {selectedPlan.optionType === 'selectable' ? (
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ${getPlanTotalPrice(selectedPlan.id).toLocaleString()}
              </p>
            ) : (
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ${selectedPlan.price.toLocaleString()}
              </p>
            )}
          </div>
          
          <button
            onClick={() => setShowAdditionalServicesConfig(true)}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Continuar
          </button>
        </div>
      )}

      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative">
          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 relative"
          >
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
          </button>

          {showContactMenu && (
            <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-2xl p-6 w-80 animate-bounce-in border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">{contactConfig.menuTitle}</h3>
                <button
                  onClick={() => setShowContactMenu(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {contactConfig.menuSubtitle}
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div className="text-left">
                    <div className="font-medium text-gray-800">WhatsApp</div>
                    <div className="text-sm text-gray-600">Respuesta inmediata</div>
                  </div>
                </button>

                <button
                  onClick={handlePhoneClick}
                  className="w-full flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div className="text-left">
                    <div className="font-medium text-gray-800">Llamar</div>
                    <div className="text-sm text-gray-600">{contactConfig.phoneNumber}</div>
                  </div>
                </button>

                <button
                  onClick={handleEmailClick}
                  className="w-full flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5 text-purple-600 mr-3" />
                  <div className="text-left">
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-sm text-gray-600">{contactConfig.email}</div>
                  </div>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Horario: {contactConfig.schedule}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showContactMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowContactMenu(false)}
        ></div>
      )}
    </div>
  );
}

export default ClientView;