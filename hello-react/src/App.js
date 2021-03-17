import Navbar from './Navbar';
import Home from './Home';
//install react-router-dom@5 & import React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      {/* other way <Navbar></Navbar> */}
      <Navbar />
      <div className="content">
        <Switch>
          {/* path to Homepage */}
          <Route path="/"> 
             <Home/>
          </Route>
        </Switch>
         </div>
    </div>
    </Router>
  );
}

export default App;
