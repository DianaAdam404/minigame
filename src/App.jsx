import { useState } from "react";
import "./App.css";

function App() {
    const [dark, setDark] = useState(false);

    return (
        <main className={dark ? "app app-dark" : "app app-light"}>
            <button type="button" onClick={() => setDark(!dark)}>
                {dark ? "Világos mód" : "Sötét mód"}
            </button>
        </main>
    );
}

export default App;
