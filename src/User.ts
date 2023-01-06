import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable{
    name: string;
    position: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        console.log(faker.address.latitude())
        this.position = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getInfo() {
        return `
        <div>User: ${this.name}</div>
        `
    }
}