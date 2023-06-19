import { ReactNode } from "react";
import styles from "./AppWrapper.module.css";
interface IAppWrapper {
    selectDataVariants: ReactNode;
    createPerson: ReactNode;
    dataTable: ReactNode;
}
export const AppWrapper = (props: IAppWrapper) => {
    return (
        <div className={styles.appContainer}>
            <div className={styles.header}>
                {props.selectDataVariants}
                {props.createPerson}
            </div>
            {props.dataTable}
        </div>
    );
};
