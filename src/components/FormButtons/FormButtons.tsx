import { Button } from "@mui/material";
import styles from "./FormButtons.module.css";

interface IFormButtons {
    isCreateDisabled: boolean;
    setIsModalOpened(value: React.SetStateAction<boolean>): void;
}

export const FormButtons = (props: IFormButtons) => {
    return (
        <div className={styles.buttons}>
            <Button
                type="submit"
                variant="contained"
                disabled={props.isCreateDisabled}
            >
                Создать
            </Button>
            <Button
                variant="contained"
                onClick={() => props.setIsModalOpened(false)}
            >
                Отмена
            </Button>
        </div>
    );
};
