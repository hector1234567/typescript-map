import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    position: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.position = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getInfo() {
        return `
            <div>Company: ${this.companyName}</div>
            <div>Catch Phrase: ${this.catchPhrase}</div>
        `
    }
}