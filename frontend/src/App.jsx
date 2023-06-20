import { useState } from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GlobalStyle />

            <Routes />
        </>
    );
}

export default App;
