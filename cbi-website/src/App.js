import react from 'react';
import navbar from './componets/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

function App() {
    return (
        <>
        <router>
      <navbar /> 
      <Switch>
        <rout path="/" exact component={Home} />
        </Switch>    
      </router>     
       </> 
   );
}

export default App;