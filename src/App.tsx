import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";

import "./App.scss";

import Counter from "./pages/Counter/Counter";
import UsersList from "./pages/UsersList/UsersList";
import Home from "./pages/Home";

import RefPage from "./pages/RefPage";
import UserPage from "./pages/UserPage/UserPage";
import { useTheme } from "./hooks/useTheme";

/**
 * Componente principale dell'applicazione
 * Renderizza la lista utenti e il contatore
 */
function App() {
    // Recupera il tema corrente e la funzione per cambiare tema dal contesto
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app-container theme-${theme} rounded-md`}>
            <BrowserRouter>
                <nav className="bg-white rounded-md p-sm">
                    <div className="flex gap-md justify-center align-center mb-sm">
                        <Link to="/">HOME</Link>
                        <Link to="/ref">REF</Link>
                        <Link to="/users">USERS</Link>
                        <Link to="/counter">COUNTER</Link>
                        <Link to="/calculator">CALCULATOR</Link>
                    </div>

                    {/* Pulsante per cambiare tema */}
                    <button onClick={toggleTheme}>Current theme: {theme}</button>
                </nav>

                <main className="container mx-auto p-md px-sm">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ref" element={<RefPage />} />
                        <Route path="/users" element={<UsersList />} />
                        <Route path="/users/:userId" element={<UserPage />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/calculator" element={<Calculator />} />
                    </Routes>
                </main>

                <footer>Copyright @ 2026</footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
