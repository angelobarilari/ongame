import { useState } from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import "./App.css";

function App() {
    return (
        <>
            <GlobalStyle />

            <Routes />
        </>
    );
}

export default App;
