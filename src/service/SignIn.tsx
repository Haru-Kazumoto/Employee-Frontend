import axios from "axios";

export const SignIn = async (loginDetail: any) => {
    return axios.post("http://localhost:8890/user/api/auth/register", loginDetail)
}
