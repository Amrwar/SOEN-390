import React from 'react';
import Signup from './Components/Signup';
import AdminSignUp from './Components/AdminSignUp';
import UsernameWeb from './Components/UsernameWeb';
import Login from './Login';
import Header from './Header';
import Admin from './Components/Admin';
import BlankPage from './Components/BlankPage';
import {BrowserRouter, Route} from 'react-router-dom';
import theme from './Components/Theme';
import {ThemeProvider} from '@material-ui/core/styles';

class App extends React.Component{

render(){
    return(
   <div>
    
       
       <BrowserRouter>
       <ThemeProvider theme ={theme}>
       <Header />W
       </ThemeProvider>
     
       <Route path="/"  element= {<AdminSignUp/>}/>
       <Route path="/Signup" exact component ={Signup} />
       <Route path="/Login" exact component= {Login}/>
       <Route path="/UsernameWeb" exact component = {UsernameWeb} />
       <Route path="/Admin" exact component = {Admin} />
       <Route path="/BlankPage" exact component = {BlankPage} />

       </BrowserRouter>

       
       </div>

    );
   };
   }export default App;