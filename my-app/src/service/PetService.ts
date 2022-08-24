import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

export type Pet = {
  id: number;
  name?: string;
  age: string;
  breed: string;
  url: string;
  gender: string;
};

const PetService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getPets: async () => {
    const data = await api.get<Pet[]>("/pets", {
      headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
    });
    console.log("data", data);
    return data.data;
  },
  getOnePet: async (id: string | undefined) => {
    const data = await api.get("/pets/" + id, {
      headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
    });
    console.log("data", data);
    return data["data"];
  },
  createPet: async (addPet: Pet) => {
    const data = await api.post("/pets/", addPet, {
      headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
    });
    return data["data"];
  },
  deletePet: async (id: string | undefined) => {
    const data = await api.delete("/pets/" + id);
  },
  updatePet: async (
    id: string,
    name: string,
    age: string,
    breed: string,
    url: string,
    gender: string,
  ) => {
    let pet: Pet = {
      id: Number(id),
      name: name,
      age: age,
      breed: breed,
      url: url,
      gender: gender,
    };
    const data = await defaultAxiosInstance.put("/pets/" + id, pet);
    return data["data"];
  },
});

export default PetService;
