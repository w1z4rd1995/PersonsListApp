export const convertId = (id: string): string => {
    const resultId = id.slice(25, 30);
    return resultId;
};

export const validateFirstName = (value: string): string => {
    let error = "";
    if (value.length < 3) {
        error = "Too short";
    }
    if (value.length === 0) {
        error = "Empty field";
    }
    return error;
};

export const validateLastName = (value: string): string => {
    let error = "";
    if (value.length < 3) {
        error = "Too short";
    }
    if (value.length === 0) {
        error = "Empty field";
    }
    return error;
};

export const validateEmail = (value: string): string => {
    let error = "";
    if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
    }
    return error;
};

export const validatePhone = (value: string): string => {
    let error = "";
    const phoneRegExp = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;
    if (!phoneRegExp.test(value)) {
        error = "Phone number is invalid";
    }
    return error;
};
