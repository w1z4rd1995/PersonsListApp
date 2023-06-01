import { IPerson } from "../../interfaces/IPerson";

interface IPersonInfo {
    selectedPerson: Partial<IPerson>;
}

export const PersonInfo = (props: IPersonInfo) => {
    return (
        <>
            {Object.keys(props.selectedPerson).length !== 0 && (
                <div className="personInfo">
                    <div>
                        Выбран пользователь{" "}
                        <b>
                            {props.selectedPerson.firstName}{" "}
                            {props.selectedPerson.lastName}
                        </b>
                    </div>
                    <div>
                        Описание:
                        <div className="textStyle">
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
