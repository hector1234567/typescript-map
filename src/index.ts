import { User } from "./User";
import { Map } from "./Map";

const user = new User();

console.log(user);

new Map(document.getElementById('map') as HTMLElement);