import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const cMap = new CustomMap("map");
const user = new User();
// cMap.addUserMarker(user);
// cMap.addCompanyMarker(new Company());
cMap.addMarker(user);
cMap.addMarker(new Company());
