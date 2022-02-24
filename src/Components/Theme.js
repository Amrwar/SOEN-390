import {createTheme} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


export default createTheme({
   palette:{
       common: {
         blue: "#0B72B9"
       },
       primary: {

          main: "#FFBA60"
    
    },
    secondary: {
        main: "#90ee90"
    },
    typography: {
        h3:{
            fontweight: 300
        }
    }
       
    }
})