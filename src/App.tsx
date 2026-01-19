import "./App.scss";

import Counter from "./components/Counter/Counter";
import UsersList from "./components/UsersList/UsersList";

function App() {
    return (
        <div>
            <UsersList />
            <Counter />
        </div>
    );
}

export default App;
