import React, {useState} from 'react';
import { ThemeProvider, createMuiTheme, makeStyles, } from '@material-ui/core';
import Home from './Home';

const useStyles = makeStyles ({
  root: {
  },
})

function App() {
  const [darkModel, setDarkModel] = useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkModel? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkModel? '#232323' : '#fff',
        dark: darkModel? '#181818' : '#f4f6f8',
        paper: darkModel? '#232323' : '#fff',
      }
    }
  });

  const classes =useStyles();

  return ( 
  <ThemeProvider theme={theme}>
   <Home darkModel={darkModel} setDarkModel={setDarkModel}/>
  </ThemeProvider>
  );
}

export default App;