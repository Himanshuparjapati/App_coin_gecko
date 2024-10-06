import axiosinstance from "./AxiosInstance";

export async function FetchCoinData(page=1,currency){
    const perPage=10;
    try {
        const response= await axiosinstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
       
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}