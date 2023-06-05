import { observer } from "mobx-react-lite";
import { store } from "../../stores/AppStore";
import Button from "@mui/material/Button";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Formik, Field, Form } from "formik";

interface IFormValues {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export const CreatePerson = observer(() => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isAllowCreate, setIsAllowCreate] = useState(false);

    const initialValues: IFormValues = {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };

    const handleOpen = () => {
        setIsModalOpened(true);
    };

    const handleClose = () => {
        setIsModalOpened(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                Добавить
            </Button>
            <Modal open={isModalOpened} onClose={handleClose}>
                <div className="modalContainer">
                    <div className="modalHeader">
                        <h2>Заполните форму</h2>{" "}
                    </div>
                    <div className="modalContent">
                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                store.createNewPerson(values);
                            }}
                        >
                            <Form className="form">
                                <div className="centerContent">
                                    <Field
                                        type="number"
                                        name="id"
                                        placeholder="id"
                                        className="inputs"
                                    />
                                </div>
                                <div className="centerContent">
                                    <Field
                                        name="firstName"
                                        placeholder="firstName"
                                        className="inputs"
                                    />
                                </div>
                                <div className="centerContent">
                                    <Field
                                        name="lastName"
                                        placeholder="lastName"
                                        className="inputs"
                                    />
                                </div>
                                <div className="centerContent">
                                    <Field
                                        name="email"
                                        placeholder="email"
                                        className="inputs"
                                    />
                                </div>
                                <div className="centerContent">
                                    <Field
                                        name="phone"
                                        placeholder="phone"
                                        className="inputs"
                                    />
                                </div>

                                <div className="buttons">
                                    <button
                                        className="submitButton"
                                        type="submit"
                                        disabled={isAllowCreate}
                                    >
                                        Создать
                                    </button>
                                    <Button variant="contained">Отмена</Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </Modal>
        </>
    );
});
