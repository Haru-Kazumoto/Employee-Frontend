import axios from "axios";

export const Register = async (register: any) => {
    return axios.post("http://localhost:8890/user/api/auth/register", register)
}
