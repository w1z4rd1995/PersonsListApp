import { observer } from "mobx-react-lite";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { store } from "../../stores/AppStore";

export const SelectDataVariants = observer(() => {
    const onSelectChange = (event: SelectChangeEvent) => {
        store.setCurrentDataVariant(event.target.value as string);
    };

    return (
        <div>
            <FormControl>
                <InputLabel style={{ width: 200 }}>
                    Выберите размер данных
                </InputLabel>
                <Select
                    style={{ width: 180 }}
                    value={store.currentDataVariant}
                    label="Выберите размер данных"
                    onChange={onSelectChange}
                >
                    <MenuItem value="smallData">Маленький</MenuItem>
                    <MenuItem value="bigData">Большой</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
});
