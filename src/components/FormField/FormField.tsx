import { Field } from "formik";
import styles from "./FormField.module.css";

interface IFormField {
    title: string;
    fieldName: string;
    placeholder: string;
    validate?(value: string): string;
    error?: string | undefined;
    touched?: boolean | undefined;
    disabled?: boolean;
}

export const FormField = (props: IFormField) => {
    return (
        <div className={styles.rowContent}>
            <div className={styles.label}>{props.title}</div>
            <Field
                name={props.fieldName}
                placeholder={props.placeholder}
                className={
                    props.error && props.touched
                        ? styles.inputError
                        : styles.input
                }
                validate={props.validate}
                disabled={props.disabled}
            />
            {props.error && props.touched && (
                <div className={styles.errorMessage}>{props.error}</div>
            )}
        </div>
    );
};
