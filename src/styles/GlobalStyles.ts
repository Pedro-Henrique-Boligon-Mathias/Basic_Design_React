import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html, body, #root {
  height:100%;
}

body {
  font-family:${({ theme }) => theme.typography.fontFamily};
  line-height:${({ theme }) => theme.typography.lineHeights.normal};
  background:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.black};
}

a {
  text-decoration:none;
  color:inherit;
}

button {
  border:none;
  background:none;
  cursor:pointer;
  font-family:inherit;
}

img {
  max-width:100%;
  display:block;
}

pre {
  background:${({ theme }) => theme.colors.gray.base};
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}

`;