import axios from 'axios'

const loginApi = axios.create({
    baseURL: 'http://localhost:8000/logIn/api/v1/login/'
})

export const loginUser = async (FormData) => {
    try{
        const response = await loginApi.post('', FormData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data
    }
    catch (error){
        console.log('Error status:', error.response.status);
        console.log('Error data:', error.response.data);
        console.log('Error headers:', error.response.headers);
        console.log('Error message:', error.message);
        throw error; // Re-lanzar el error para que el componente pueda manejarlo
    }
}