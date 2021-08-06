import { atom } from "recoil";

const regionId = atom({
  key: "regionId",
  default: null,
});
const companyId = atom({
  key: "companyId",
  default: null,
});
const City = atom({
  key: "City",
  default: null,
});

export { regionId, companyId, City };
