import { observer } from "mobx-react-lite";
import { store } from "../../stores/AppStore";
import Button from "@mui/material/Button";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Formik, Field, Form } from "formik";
import { v4 as uuid } from "uuid";
import {
    convertId,
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePhone,
} from "../utils/Validation";
import styles from "./CreatePerson.module.css";
console.log(styles);

interface IFormValues {
    id: number | string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export const CreatePerson = observer(() => {
    let uniqueId = uuid();

    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isCreateDisabled, setIsCreateDisabled] = useState(true);

    const initialValues: IFormValues = {
        id: convertId(uniqueId),
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
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <h2>Заполните форму</h2>{" "}
                    </div>
                    <div className={styles.modalContent}>
                        <Formik
                            validate={(values) => {
                                if (
                                    values.id !== 0 &&
                                    values.firstName.length !== 0 &&
                                    values.lastName.length !== 0 &&
                                    values.email.length !== 0 &&
                                    values.phone.length !== 0
                                ) {
                                    setIsCreateDisabled(false);
                                } else {
                                    setIsCreateDisabled(true);
                                }
                            }}
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                store.createNewPerson(values);
                                setIsModalOpened(false);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className={styles.form}>
                                    <div className={styles.rowContent}>
                                        <div className={styles.label}>ID:</div>
                                        <Field
                                            type="text"
                                            name="id"
                                            placeholder="id"
                                            className={styles.inputs}
                                            disabled
                                        />
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.label}>
                                            First Name:
                                        </div>
                                        <Field
                                            name="firstName"
                                            placeholder="firstName"
                                            className={
                                                errors.firstName &&
                                                touched.firstName
                                                    ? styles.inputsError
                                                    : styles.inputs
                                            }
                                            validate={validateFirstName}
                                        />
                                        {errors.firstName &&
                                            touched.firstName && (
                                                <div
                                                    className={
                                                        styles.errorMessage
                                                    }
                                                >
                                                    {errors.firstName}
                                                </div>
                                            )}
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.label}>
                                            Last Name:
                                        </div>
                                        <Field
                                            name="lastName"
                                            placeholder="lastName"
                                            className={
                                                errors.lastName &&
                                                touched.lastName
                                                    ? styles.inputsError
                                                    : styles.inputs
                                            }
                                            validate={validateLastName}
                                        />
                                        {errors.lastName &&
                                            touched.lastName && (
                                                <div
                                                    className={
                                                        styles.errorMessage
                                                    }
                                                >
                                                    {errors.lastName}
                                                </div>
                                            )}
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.label}>
                                            Email:
                                        </div>
                                        <Field
                                            name="email"
                                            placeholder="email"
                                            className={
                                                errors.email && touched.email
                                                    ? styles.inputsError
                                                    : styles.inputs
                                            }
                                            validate={validateEmail}
                                        />
                                        {errors.email && touched.email && (
                                            <div
                                                className={styles.errorMessage}
                                            >
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.label}>
                                            Phone
                                        </div>
                                        <Field
                                            validate={validatePhone}
                                            name="phone"
                                            placeholder="(999)999-9999"
                                            className={
                                                errors.phone && touched.phone
                                                    ? styles.inputsError
                                                    : styles.inputs
                                            }
                                        />
                                        {errors.phone && touched.phone && (
                                            <div
                                                className={styles.errorMessage}
                                            >
                                                {errors.phone}
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.buttons}>
                                        <button
                                            className={styles.submitButton}
                                            type="submit"
                                            disabled={isCreateDisabled}
                                        >
                                            Создать
                                        </button>
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                setIsModalOpened(false)
                                            }
                                        >
                                            Отмена
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Modal>
        </>
    );
});
