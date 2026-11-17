import { useDebugValue, useState } from "react";
import "./App.css";

function App() {
    const [dark, setDark] = useState(false);
    const themeName = dark ? "dark-theme" : "light-theme";

    useDebugValue(themeName);

    return (
        <main className={dark ? "app app-dark" : "app app-light"}>
            <div className="theme-panel">
                <p className="debug-text">Debug: {themeName}</p>
                <button type="button" onClick={() => setDark((current) => !current)}>
                    {dark ? "Switch to light mode" : "Switch to dark mode"}
                </button>
            </div>
        </main>
    );
}

export default App;
