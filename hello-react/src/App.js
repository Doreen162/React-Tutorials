import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      {/* Components */}
      <div className="content">
         <h1>App Component</h1>
         {/* Returns word in const title */}
         <h1>{ title }</h1>
         {/* Returns word in const likes & number 50 */}
         <p>Liked { likes } times </p>

         {/* returns whats in brackets */}
         <p>{10}</p>
         <p>{"hello ninjas"}</p>
         <p> {[1,2,3,4,5]}</p>
         <p>{ Math.random() * 10}</p>

         {/* Returns word in const link */}
         <a href={link}>Google Site</a>
         </div>
    </div>
  );
}

export default App;
