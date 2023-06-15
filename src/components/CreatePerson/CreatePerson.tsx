import { observer } from "mobx-react-lite";
import { store } from "../../stores/AppStore";
import Button from "@mui/material/Button";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Formik, Form } from "formik";
import { v4 as uuid } from "uuid";
import styles from "./CreatePerson.module.css";
import { FormField } from "../FormField/FormField";
import { FormButtons } from "../FormButtons/FormButtons";
import { IFormValues } from "../../interfaces/IFormValues";
import {
    convertId,
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePhone,
} from "../../utils/Validation";

export const CreatePerson = observer(() => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(true);

    let uniqueId = uuid();

    const initialValues: IFormValues = {
        id: convertId(uniqueId),
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };

    const createButtonDisabled = (values: IFormValues) => {
        if (
            values.id &&
            values.firstName.length &&
            values.lastName.length &&
            values.email.length &&
            values.phone.length
        ) {
            setIsCreateButtonDisabled(false);
        } else {
            setIsCreateButtonDisabled(true);
        }
    };

    const handleOnSubmit = async (values: IFormValues) => {
        store.createNewPerson(values);
        setIsModalOpened(false);
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
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <h2>Заполните форму</h2>
                    </div>
                    <div className={styles.modalContent}>
                        <Formik
                            validate={createButtonDisabled}
                            initialValues={initialValues}
                            onSubmit={handleOnSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className={styles.form}>
                                    <FormField
                                        title="ID:"
                                        fieldName="id"
                                        placeholder="id"
                                        disabled={true}
                                    />
                                    <FormField
                                        title="First Name:"
                                        fieldName="firstName"
                                        placeholder="firstName"
                                        validate={validateFirstName}
                                        error={errors.firstName}
                                        touched={touched.firstName}
                                    />
                                    <FormField
                                        title="Last Name:"
                                        fieldName="lastName"
                                        placeholder="lastName"
                                        validate={validateLastName}
                                        error={errors.lastName}
                                        touched={touched.lastName}
                                    />

                                    <FormField
                                        title="Email:"
                                        fieldName="email"
                                        placeholder="email"
                                        validate={validateEmail}
                                        error={errors.email}
                                        touched={touched.email}
                                    />
                                    <FormField
                                        title="Phone:"
                                        fieldName="phone"
                                        placeholder="В формате (999)999-9999"
                                        validate={validatePhone}
                                        error={errors.phone}
                                        touched={touched.phone}
                                    />

                                    <FormButtons
                                        setIsModalOpened={setIsModalOpened}
                                        isCreateDisabled={
                                            isCreateButtonDisabled
                                        }
                                    />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Modal>
        </>
    );
});
