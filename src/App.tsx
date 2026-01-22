import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";

import "./App.scss";

import Counter from "./pages/Counter/Counter";
import UsersList from "./pages/UsersList/UsersList";
import Home from "./pages/Home";
import User from "./pages/UserPage/UserPage";
import RefPage from "./pages/RefPage";

/**
 * Componente principale dell'applicazione
 * Renderizza la lista utenti e il contatore
 */
function App() {
    return (
        <BrowserRouter>
            <nav className="flex gap-md bg-white p-sm rounded-md justify-center">
                <Link to="/">HOME</Link>
                <Link to="/ref">REF</Link>
                <Link to="/users">USERS</Link>
                <Link to="/counter">COUNTER</Link>
                <Link to="/calculator">CALCULATOR</Link>
            </nav>

            <main className="container mx-auto p-md px-sm">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ref" element={<RefPage />} />
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/users/:userId" element={<User />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/calculator" element={<Calculator />} />
                </Routes>
            </main>

            <footer>Copyright @ 2026</footer>
        </BrowserRouter>
    );
}

export default App;
