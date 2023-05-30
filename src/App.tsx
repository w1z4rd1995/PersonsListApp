import { observer } from "mobx-react-lite";
import { DataTable } from "./components/DataGrid/DataGrid";
import "./App.css";

const App = observer(() => {
    return (
        <div className="App">
            <DataTable />
        </div>
    );
});

export default App;
