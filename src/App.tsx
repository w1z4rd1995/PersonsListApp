import { observer } from "mobx-react-lite";
import { DataTable } from "./components/DataTable/DataTable";
import "./App.css";
import { SelectDataVariants } from "./components/SelectDataVariants/SelectDataVariants";

const App = observer(() => {
    return (
        <div className="App">
            <SelectDataVariants />
            <DataTable />
        </div>
    );
});

export default App;
