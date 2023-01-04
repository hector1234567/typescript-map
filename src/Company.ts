import { faker } from "@faker-js/faker";

export class Company {
    companyName: string;
    catchPhrase: string;
    position: {
        lat: number;
        long: number;
    }

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.position = {
            lat: parseFloat(faker.address.latitude()),
            long: parseFloat(faker.address.longitude())
        }
    }
}