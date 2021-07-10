import { createGlobalStyle } from 'styled-components'
import background  from '../assets/background.jpg';



export const GlobalStyle = createGlobalStyle`
:root {
  --background: #E5E5E5;
  --red: #B31F24;
  --green: #249C48;
  --whithe: #fff;
  --light-accent: #A99FAA;




  --text-title: #2F2544;
  --text-body: #7B6490;

  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html {
  @media (max-width: 1880px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body {
  background: url(${background}), var(--background) no-repeat ;
  background-size: 100%;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, strong{
  font-weight: 600;

}

button {
  cursor: pointer;
}
`;