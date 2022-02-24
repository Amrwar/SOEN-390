import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './Components/GoogleAuth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import theme from './Components/Theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


export default function Header (props) {

    return(
 
      <AppBar position="fixed" color="secondary"> 
      <Toolbar>
     
        <div className="ui button">
        <Link to="/" className=" item">
               Homepage
                </Link>
      </div>
            <div className="item">
    <div className="ui button"><Link to="/Login" className="item">
               Login
                </Link>
                </div>
  </div>
  <div className="item">
    <div className="ui button"><Link to ="/Signup" className="item">
            Signup
        </Link>
    </div>
  </div>

  <GoogleAuth/>

</Toolbar>
    </AppBar>
    );
};
