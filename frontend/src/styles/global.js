import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --grey-1: rgb(14, 14, 16);
        --grey-2: rgb(24, 24, 27);
        --grey-3: rgb(47, 47, 53);
        --grey-4: rgb(53, 53, 59);
        --grey-5: rgb(61, 61, 64);
        --grey-6: rgb(114, 114, 120);
        --white: #fff;
        --black: #000;
        --purple-1: rgb(169, 112, 255);
        --purple-2: rgb(119, 44, 232);
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #000000;
    }

    h1 {
        color: var(--white);
    }

    button {
        cursor: pointer;
    }
`;
