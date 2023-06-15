import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { store } from "../../stores/AppStore";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { IPerson } from "../../interfaces/IPerson";
import { PersonInfo } from "../PersonInfo/PersonInfo";
import styles from "./DataTable.module.css";
import {
    columns,
    pageSize,
    columnBuffer,
    columnThreshold,
} from "../../constants/constants";

export const DataTable = observer(() => {
    const [selectedPerson, setSelectedPerson] = useState<Partial<IPerson>>({});

    const findSelectedPerson = (id: GridRowSelectionModel) => {
        const selectedID = id[0];
        let selectedRowData: IPerson[] = [];
        if (!store.newPerson) {
            selectedRowData = store.persons.filter(
                (person) => person.id === selectedID
            );
        } else {
            selectedRowData = store.mixedPersons.filter(
                (person) => person.id === selectedID
            );
        }
        if (selectedRowData[0]) {
            setSelectedPerson(selectedRowData[0]);
        } else setSelectedPerson({});
    };

    useEffect(() => {
        if (store.currentDataVariant === "smallData") {
            store.fetchData(store.smallDataUrl);
        } else store.fetchData(store.bigDataUrl);
        return () => store.clearPersonsLists();
    }, [store.currentDataVariant]);

    return (
        <>
            {!store.loadingError ? (
                <div>
                    <div className={styles.table}>
                        <DataGrid
                            initialState={{
                                pagination: {
                                    paginationModel: { pageSize: pageSize },
                                },
                            }}
                            columnBuffer={columnBuffer}
                            columnThreshold={columnThreshold}
                            rows={
                                !store.mixedPersons.length
                                    ? store.persons
                                    : store.mixedPersons
                            }
                            columns={columns}
                            pagination
                            loading={store.isLoading}
                            onRowSelectionModelChange={findSelectedPerson}
                        />
                    </div>
                    <PersonInfo selectedPerson={selectedPerson} />
                </div>
            ) : (
                <div> Ошибка загрузки</div>
            )}
        </>
    );
});
