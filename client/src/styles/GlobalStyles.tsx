import { css, Global } from "@emotion/react";

const globalStyles = css`
  html,
  body,
  #root {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  /* Add any additional global styles here */
`;

const GlobalStyles = () => <Global styles={globalStyles} />;
export default GlobalStyles;
