import { observer } from "mobx-react-lite";
import { DataTable } from "./components/DataTable/DataTable";
import { SelectDataVariants } from "./components/SelectDataVariants/SelectDataVariants";
import { CreatePerson } from "./components/CreatePerson/CreatePerson";
import styles from "./App.module.css";

const App = observer(() => {
    return (
        <div className={styles.appContainer}>
            <div className={styles.header}>
                <SelectDataVariants />
                <CreatePerson />
            </div>
            <DataTable />
        </div>
    );
});

export default App;
