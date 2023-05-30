import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";

interface IAddresses {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
}

interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
    address: IAddresses;
}

export class AppStore {
    constructor() {
        makeAutoObservable(this);
    }

    persons: IPerson[] = [];
    isLoading: boolean = false;
    loadingError: boolean = false;
    async fetchData() {
        try {
            this.setIsLoading(true);
            const url =
                "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
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
}
export const store = new AppStore();
export const StoreContext = createContext(store);
