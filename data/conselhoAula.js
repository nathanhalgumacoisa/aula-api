import axios from "axios";

const URL_API = 'https://api.adviceslip.com/advice';
const conselho = async () => {
    try {
        const resposta = await axios.get(URL_API);
        return resposta
    }catch (error){
        throw error;
    }
}
export default conselho