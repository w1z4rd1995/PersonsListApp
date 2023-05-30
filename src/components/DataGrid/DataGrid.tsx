import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { store } from "../../stores/AppStore";
import { DataGrid } from "@mui/x-data-grid";

export const DataTable = observer(() => {
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "firstName", headerName: "FirstName", width: 150 },
        { field: "lastName", headerName: "LastName", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "phone", headerName: "Phone", width: 150 },
    ];

    useEffect(() => {
        store.fetchData();
    }, []);

    return store.loadingError === false ? (
        <div style={{ height: 600, width: 800 }}>
            <DataGrid
                rows={store.persons}
                columns={columns}
                autoPageSize
                loading={store.isLoading}
            />
        </div>
    ) : (
        <div> Ошибка загрузки</div>
    );
});
