export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">DEMOCRACY Blog</h1>
        <div className="prose max-w-none">
          <p className="mb-8">
            Hier findest du Neuigkeiten, Updates und Hintergründe zur DEMOCRACY App und zum Verein.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="mb-4">
              Unsere Blog-Artikel werden derzeit auf Medium veröffentlicht:
            </p>
            <p>
              <a href="https://medium.com/@democracy_de" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline text-xl">
                Zum DEMOCRACY Blog auf Medium →
              </a>
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Folge uns</h2>
          <p className="mb-4">
            Bleibe auf dem Laufenden über unsere Social Media Kanäle:
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/democracygermany/" target="_blank" rel="noopener noreferrer" 
               className="text-3xl hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/democracy_de" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/democracy_app" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
