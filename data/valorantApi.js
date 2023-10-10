import axios from "axios";

const API_URL = 'https://valorant-api.com/v1/agents';
const valorant = async () =>{
    try{
        const retorno = await axios.get(API_URL);
        return retorno
    }catch(erro){
        throw erro
    }
}
export default valorant