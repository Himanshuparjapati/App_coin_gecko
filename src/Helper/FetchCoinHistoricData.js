import axiosinstance from "./AxiosInstance";

export async function FetchCoinHistory(id,interval,days=7,currency='USD'){
    
    try {
        const response= await axiosinstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
       
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}
export default FetchCoinHistory