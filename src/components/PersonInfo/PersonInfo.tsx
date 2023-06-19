import { IPerson } from "../../interfaces/IPerson";
import styles from "./PersonInfo.module.css";
import { PersonInfoField } from "../../components/PersonInfoField/PersonInfoField";

interface IPersonInfo {
    selectedPerson: Partial<IPerson>;
}

export const PersonInfo = (props: IPersonInfo) => {
    return (
        <div className={styles.personInfo}>
            <PersonInfoField
                title="Выбран пользователь: "
                description={props.selectedPerson.firstName}
                optionalDescription={props.selectedPerson.lastName}
            />
            <PersonInfoField
                title="Описание: "
                description={props.selectedPerson.description}
            />
            <PersonInfoField
                title="Адрес проживания: "
                description={props.selectedPerson.address?.streetAddress}
            />
            <PersonInfoField
                title="Город: "
                description={props.selectedPerson.address?.city}
            />
            <PersonInfoField
                title="Провинция/штат: "
                description={props.selectedPerson.address?.state}
            />
            <PersonInfoField
                title="Индекс: "
                description={props.selectedPerson.address?.zip}
            />
        </div>
    );
};
