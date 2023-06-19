import { observer } from "mobx-react-lite";
import { DataTable } from "./components/DataTable/DataTable";
import { SelectDataVariants } from "./components/SelectDataVariants/SelectDataVariants";
import { CreatePerson } from "./components/CreatePerson/CreatePerson";
import { AppWrapper } from "./components/AppWrapper/AppWrapper";

const App = observer(() => {
    return (
        <AppWrapper
            selectDataVariants={<SelectDataVariants />}
            createPerson={<CreatePerson />}
            dataTable={<DataTable />}
        />
    );
});

export default App;
