import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { store } from "../../stores/AppStore";
import { DataGrid } from "@mui/x-data-grid";
import { IPerson } from "../../interfaces/IPerson";
import { PersonInfo } from "../PersonInfo/PersonInfo";
import { SelectDataVariants } from "../SelectDataVariants/SelectDataVariants";

export const DataTable = observer(() => {
    const [selectedPerson, setSelectedPerson] = useState<Partial<IPerson>>({});
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "firstName", headerName: "FirstName", width: 150 },
        { field: "lastName", headerName: "LastName", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "phone", headerName: "Phone", width: 150 },
    ];

    useEffect(() => {
        if (store.currentDataVariant === "smallData") {
            store.fetchData(store.smallDataUrl);
        } else store.fetchData(store.bigDataUrl);
    }, [store.currentDataVariant]);

    return (
        <>
            <div>
                {store.loadingError === false ? (
                    <div>
                        <div style={{ height: 600, width: 800 }}>
                            <DataGrid
                                columnBuffer={2}
                                columnThreshold={2}
                                rows={store.persons}
                                columns={columns}
                                pagination
                                loading={store.isLoading}
                                onRowSelectionModelChange={(id) => {
                                    const selectedIDs = new Set(id);
                                    const selectedRowData =
                                        store.persons.filter((person) =>
                                            selectedIDs.has(person.id)
                                        );
                                    if (selectedRowData[0] !== undefined) {
                                        setSelectedPerson(selectedRowData[0]);
                                    } else setSelectedPerson({});
                                }}
                            />
                        </div>
                        <PersonInfo selectedPerson={selectedPerson} />
                    </div>
                ) : (
                    <div> Ошибка загрузки</div>
                )}
            </div>
        </>
    );
});
