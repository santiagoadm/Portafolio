// Configuración en tiempo de ejecución. En Cloudflare Pages este archivo lo regenera
// el workflow de despliegue a partir de los secrets del repositorio.
window.PORTFOLIO_CONFIG = {
  // URL pública de la API Express. Déjala vacía si no despliegas el backend.
  apiUrl: '',
  // Proyecto de Supabase para guardar los mensajes del formulario de contacto.
  supabaseUrl: '',
  supabaseAnonKey: ''
};
