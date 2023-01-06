import { User } from "./User";
import { Map } from "./Map";
import { Company } from "./Company";

const user = new User();
const company = new Company();

const map = new Map(document.getElementById('map') as HTMLElement);

map.addMark(user);
map.addMark(company);