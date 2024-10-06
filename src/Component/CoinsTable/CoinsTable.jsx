import { useState , useEffect} from "react"
import { FetchCoinData } from "../../Helper/fetchCoinData"
import { useQuery } from "react-query"
import Zustand from "../../Store/Zustand"
import { useNavigate } from "react-router-dom";
import MyLoader from "../PageLoader/PageLoader";

function CoinsTable() {
  const {currency}=Zustand();

  const navigate = useNavigate();

  const [page,setPage]=useState(1)
  // const [number ,setNumber]=useState(1)
 const {data,isLoading,isError,error}= useQuery(['coin',page,currency],()=>FetchCoinData(page,currency),{
    // retry:2,
    // retryDelay:1000,
    CacheTime:1000*60*2,
    staleTime:1000*60*2
  })
  useEffect(()=>{
    console.log(data);
    
  },[data])

  function handleCoinRedirect(id) {
   navigate(`/details/${id}`)
  }


  // if(isLoading) return <div>Loading...</div>


  if (isError) return <div>Error:{error.message}</div> 
    
 
  

  return (
    <div
      className="my-5 flex flex-col items-center justify-center gap-5 w-{80vw} mx-auto" 
    >
         <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                {/* Header of the table */}
                <div className="basis-[35%]">
                    Coin 
                </div>
                <div  className="basis-[25%]">
                    Price 
                </div>
                <div  className="basis-[20%]">
                    24h change 
                </div>
                <div  className="basis-[20%]">
                    Market Cap
                </div>
            </div>
        <div
        className="flex flex-col w-[80vw] mx-auto "
        >
          {isLoading && <MyLoader/>}
         {data && data.map((coin)=>{
          return (
             
            <div
                 onClick = { ()=>  handleCoinRedirect(coin.id)}
                 key={coin.id}
                 className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
             >
                 <div className="flex itmes-center justify-start gap-3 basis-[35%]">
                    <div className=" w-[5rem] h-[5rem]">
                      <img src={coin.image} alt="" className="w-full h-full" loading="lazy" />

                    </div>
                   <div 
                   className="flex flex-col w-[80vw] mx-auto"
                   >
                    <div className="text-2xl text-black">
                       {coin.name}
                    </div>
                    <div className="text-xl text-black">
                      {coin.symbol}
                    </div>
                  </div>
                    <div className="basis-[25%] text-black">
                      {coin.current_price}
                    </div>
                    <div className="basis-[20%] text-black">
                      {coin.price_change_24h}
                    </div>
                    <div className="basis-[20%] text-black">
                      {coin.market_cap}
                    </div>
                  
                 </div>
                 
            </div>
          )
         })}
         <div className="flex gap-4 items-center justify-center">
                      <button disabled={page==1}
                     onClick={()=>setPage(page-1)}
                    
                      className="btn btn-primary text-black text-2xl"
                      >
                       Go to page no  {page-1}
                      </button>
                     <button onClick={()=>setPage(page+1)}
                     className="btn btn-secondary text-black text-2xl"
                     >
                       Go To page No{page+1}
                     </button>
                 </div>
        </div>
        </div>
  )
}

export default CoinsTable