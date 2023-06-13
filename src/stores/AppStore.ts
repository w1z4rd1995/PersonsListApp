import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IPerson } from "../interfaces/IPerson";

export class AppStore {
    constructor() {
        makeAutoObservable(this);
    }

    persons: IPerson[] = [];
    isLoading: boolean = false;
    loadingError: boolean = false;
    currentDataVariant: string = "smallData";
    newPerson: IPerson | null = null;
    createdPersons: IPerson[] = [];
    mixedPersons: IPerson[] = [];

    smallDataUrl: string =
        "http://www.filltext.com/?rows=32&id={number|100000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    bigDataUrl: string =
        "http://www.filltext.com/?rows=1000&id={number|100000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    async fetchData(url: string) {
        try {
            this.persons = [];
            this.setIsLoading(true);
            const response = await axios.get<IPerson[]>(url);
            this.persons = response.data;
            if (this.persons) {
                this.setIsLoading(false);
                this.setIsError(false);
            }
        } catch {
            this.setIsError(true);
        }
    }

    setIsLoading(value: boolean) {
        this.isLoading = value;
    }

    setIsError(value: boolean) {
        this.loadingError = value;
    }

    setCurrentDataVariant(value: string) {
        this.currentDataVariant = value;
    }

    createNewPerson(person: IPerson) {
        this.newPerson = new CreatePerson(person);
        this.createdPersons.unshift(this.newPerson);
        this.mixedPersons = this.createdPersons.concat(this.persons);
    }
}

export class CreatePerson {
    id: number | string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    constructor({ id, firstName, lastName, email, phone }: IPerson) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}
export const store = new AppStore();
export const StoreContext = createContext(store);
