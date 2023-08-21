import axios from "axios";

export const getRanking = () => {
    return axios.get('/ranking/api/v1/ranking/')
}