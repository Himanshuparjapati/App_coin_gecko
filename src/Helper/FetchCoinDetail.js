import axiosinstance from "./AxiosInstance";

export async function FetchCoinDetail(id){
    
    try {
        const response= await axiosinstance.get(`/coins/${id}`);
       
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}
export default FetchCoinDetail