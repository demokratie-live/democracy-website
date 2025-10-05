export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
        <div className="prose max-w-none">
          <p className="mb-8">
            Haben Sie Fragen, Anregungen oder möchten Sie mit uns in Kontakt treten? 
            Wir freuen uns über Ihre Nachricht!
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">DEMOCRACY Deutschland e.V.</h2>
          <p className="mb-4">
            E-Mail: <a href="mailto:contact@democracy-deutschland.de" className="text-blue-600 hover:underline">
              contact@democracy-deutschland.de
            </a>
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Social Media</h2>
          <div className="flex gap-4 mb-8">
            <a href="https://www.facebook.com/democracygermany/" target="_blank" rel="noopener noreferrer" 
               className="text-3xl hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/democracy_de" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC2R4cGTq1LjFZ2DvDaVhDyg" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://github.com/demokratie-live/" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-gray-700">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/democracy_app" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://discord.gg/ZWcFrEc" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-indigo-600">
              <i className="fab fa-discord"></i>
            </a>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Presse-Anfragen</h2>
          <p className="mb-4">
            Für Presse-Anfragen wenden Sie sich bitte an:<br />
            E-Mail: <a href="mailto:contact@democracy-deutschland.de" className="text-blue-600 hover:underline">
              contact@democracy-deutschland.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
