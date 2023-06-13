import { IPerson } from "../../interfaces/IPerson";
import styles from "./PersonInfo.module.css";

interface IPersonInfo {
    selectedPerson: Partial<IPerson>;
}

export const PersonInfo = (props: IPersonInfo) => {
    return (
        <>
            {Object.keys(props.selectedPerson).length !== 0 && (
                <div className={styles.personInfo}>
                    <div>
                        Выбран пользователь{" "}
                        <b>
                            {props.selectedPerson.firstName}{" "}
                            {props.selectedPerson.lastName}
                        </b>
                    </div>
                    <div>
                        Описание:
                        <div className={styles.personDescription}>
                            {props.selectedPerson.description}
                        </div>
                    </div>
                    <div>
                        Адрес проживания:
                        <b> {props.selectedPerson.address?.streetAddress}</b>
                    </div>
                    <div>
                        Город:
                        <b> {props.selectedPerson.address?.city}</b>
                    </div>
                    <div>
                        Провинция/штат:
                        <b> {props.selectedPerson.address?.state}</b>
                    </div>
                    <div>
                        Индекс:
                        <b> {props.selectedPerson.address?.zip}</b>
                    </div>
                </div>
            )}
        </>
    );
};
