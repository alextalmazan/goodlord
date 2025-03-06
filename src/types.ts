export interface Employer {
    name: string;
    start_date: string;
    end_date: string;
}

export interface Guarantor {
    name: string;
    address: string;
    relation: string;
}

export interface Personal {
    first_name: string;
    last_name: string;
    current_address: string;
}

export interface ReferenceData {
    personal: Personal;
    employer: Employer[];
    guarantor: Guarantor;
}
