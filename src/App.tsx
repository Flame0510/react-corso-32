import "./App.scss";

import Counter from "./components/Counter/Counter";
import UsersList from "./components/UsersList/UsersList";

/**
 * Componente principale dell'applicazione
 * Renderizza la lista utenti e il contatore
 */
function App() {
    return (
        <div>
            {/* Lista utenti con fetch da API */}
            <UsersList />
            
            {/* Contatore con operazioni matematiche */}
            <Counter />
        </div>
    );
}

export default App;
