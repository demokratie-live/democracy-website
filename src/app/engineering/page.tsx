export default function Engineering() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Programmieren für DEMOCRACY</h1>
        <div className="prose max-w-none">
          <p className="mb-8">
            DEMOCRACY ist Open Source! Wir freuen uns über jeden, der mithilft, 
            die App und Website zu verbessern.
          </p>
          
          <h2 id="help" className="text-2xl font-bold mt-8 mb-4">Wie kann ich mithelfen?</h2>
          <p className="mb-4">
            Es gibt viele Möglichkeiten, wie du bei DEMOCRACY mitmachen kannst:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-2">Code beitragen über GitHub</li>
            <li className="mb-2">Bugs melden und fixen</li>
            <li className="mb-2">Features vorschlagen und umsetzen</li>
            <li className="mb-2">Dokumentation verbessern</li>
            <li className="mb-2">Design und UX optimieren</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Unsere Repositories</h2>
          <p className="mb-4">
            Alle unsere Projekte findest du auf GitHub:
          </p>
          <p className="mb-8">
            <a href="https://github.com/demokratie-live/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-600 hover:underline text-xl">
              <i className="fab fa-github"></i> github.com/demokratie-live
            </a>
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <img src="/images/react-native.png" alt="React Native" className="h-24 mx-auto mb-2" />
              <p>React Native</p>
            </div>
            <div className="text-center">
              <img src="/images/graphql.png" alt="GraphQL" className="h-24 mx-auto mb-2" />
              <p>GraphQL</p>
            </div>
            <div className="text-center">
              <img src="/images/nodejs.png" alt="Node.js" className="h-24 mx-auto mb-2" />
              <p>Node.js</p>
            </div>
            <div className="text-center">
              <img src="/images/ts-js.png" alt="TypeScript" className="h-24 mx-auto mb-2" />
              <p>TypeScript</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Community</h2>
          <p className="mb-4">
            Tritt unserem Discord bei, um dich mit anderen Entwicklern auszutauschen:
          </p>
          <p className="mb-8">
            <a href="https://discord.gg/ZWcFrEc" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-600 hover:underline text-xl">
              <i className="fab fa-discord"></i> discord.gg/ZWcFrEc
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
