import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
margin:0;
padding:0;
box-sizing:border-box;
outline:0;

body{
  background:#191920 url('https://app.rocketseat.com.br/api/files/1562597196893.svg') no-repeat center top;
  -webkit-font-smoothing: antialiased;
}

body,input,button{
  font-family: roboto,sans-serif;
  font-size: 14px;
}

#root{
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button{
  cursor: pointer;
}
`;
