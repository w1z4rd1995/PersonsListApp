import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IPerson } from "../interfaces/IPerson";

export class AppStore {
    constructor() {
        makeAutoObservable(this);
    }

    persons: IPerson[] = [];
    tempPersons: IPerson[] = [];
    isLoading: boolean = false;
    loadingError: boolean = false;
    newPerson: IPerson | null = null;
    currentDataVariant: string = "smallData";

    async fetchData(url: string) {
        try {
            this.setIsLoading(true);
            const response = await axios.get<IPerson[]>(url);
            this.tempPersons = response.data;
            if (this.tempPersons) {
                this.removeDublicates();
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
        this.persons = [this.newPerson, ...this.persons];
    }

    clearPersonsList() {
        this.persons = [];
    }

    removeDublicates() {
        const table: { [id: number | string]: number } = {};
        this.persons = this.tempPersons.filter(
            ({ id }) => !table[id] && (table[id] = 1)
        );
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
