import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* other way <Navbar></Navbar> */}
      <Navbar />
      <div className="content">
        <Home />
         </div>
    </div>
  );
}

export default App;
