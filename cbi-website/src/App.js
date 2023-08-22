import react from 'react';
import navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

function App() {
    return (
        <>
        <Router>
      <Navbar /> 
      <Switch>
        {/* <rout path="/" exact component={home} /> */}
        </Switch>    
      </Router>     
       </> 
   );
}

export default App;