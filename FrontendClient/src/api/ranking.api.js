import axios from "axios";

export const getRanking = () => {
    try {
        return axios.get('http://localhost:8000/rankingApp/api/v1/rankingApp/obtener_ranking/');
    } catch (error) {
        console.error('Error al obtener datos del ranking:', error);
    }  
};