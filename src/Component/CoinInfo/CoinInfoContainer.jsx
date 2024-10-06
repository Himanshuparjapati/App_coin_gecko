import { useQuery } from "react-query";
import CoinInfo from "./CoinInfo";
import Zustand from "../../Store/Zustand";
import { useState } from "react";
import FetchCoinHistory from "../../Helper/FetchCoinHistoricData";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";


function CoinInfoContainer({coinId}){
    const {currency}=Zustand();
    const [days,setdays]=useState(7);
    const [interval,setCoinInterval]=useState('daily');
    const  {data:historicData,isLoading,isError}=useQuery(['coinHistoricData',coinId,currency,days],()=>FetchCoinHistory(coinId,interval,days,currency),{
        cacheTime:1000*60*2,
        staleTime:1000*60*2,
    });

    if(isLoading){
        return <MyLoader/>;
    }

    if(isError){
        return <Alert message='Error In Fetch data' type='error'/>;
    }

    return (

        <div>
         <CoinInfo
          historicData={historicData}
          setdays={setdays}
           setInterval={setCoinInterval}
           days={days}
           currency={currency}
           />
        </div>
    )
}
export default CoinInfoContainer