import Navbar from './Navbar';
import Home from './Home';
//install react-router-dom@5 & import React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      {/* other way <Navbar></Navbar> */}
      <Navbar />
      <div className="content">
        <Switch>
          {/* path to Homepage */}
          <Route exact path ="/"> 
             <Home />
          </Route>
          <Route path="/create"> 
             <Create />
          </Route>
          <Route path="/blogs/:id"> 
             <BlogDetails />
          </Route>
        </Switch>
         </div>
    </div>
    </Router>
  );
}

export default App;
