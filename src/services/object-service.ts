import axios from "axios";

export function findyByUser(user: string) {
    return axios.get(`https://api.github.com/users/${user}`);
}