import { observer } from "mobx-react-lite";
import { DataTable } from "./components/DataTable/DataTable";
import "./App.css";
import { SelectDataVariants } from "./components/SelectDataVariants/SelectDataVariants";
import { CreatePerson } from "./components/CreatePerson/CreatePerson";

const App = observer(() => {
    return (
        <div className="App">
            <div className="header">
                <SelectDataVariants />
                <CreatePerson />
            </div>

            <DataTable />
        </div>
    );
});

export default App;
