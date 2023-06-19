import { observer } from "mobx-react-lite";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { store } from "../../stores/AppStore";
import styles from "./SelectDataVariants.module.css";

export const SelectDataVariants = observer(() => {
    const onSelectChange = (event: SelectChangeEvent) => {
        store.setCurrentDataVariant(event.target.value as string);
    };

    return (
        <FormControl>
            <InputLabel className={styles.label}>
                Выберите размер данных
            </InputLabel>
            <Select
                className={styles.select}
                value={store.currentDataVariant}
                label="Выберите размер данных"
                onChange={onSelectChange}
            >
                <MenuItem value="smallData">Маленький</MenuItem>
                <MenuItem value="bigData">Большой</MenuItem>
            </Select>
        </FormControl>
    );
});
