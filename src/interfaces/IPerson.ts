export interface IPerson {
    id: number | string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description?: string;
    address?: IAddresses;
}

interface IAddresses {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
}
