import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

type ILoginRequest = {
  email: string;
  password: string;
};

const AuthService = (api: AxiosInstance = defaultAxiosInstance) => ({
  login: async (params: ILoginRequest) => {
    const res = await api.post("/login", params).catch((error) => {
      throw error;
    });
    if (res && res.status === 200) {
      console.log("token");
      localStorage.setItem("token", res.data.accessToken);
    }
  },
});

export default AuthService;
