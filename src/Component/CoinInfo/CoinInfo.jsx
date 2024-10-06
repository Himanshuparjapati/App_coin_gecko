
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto";
import Alert from '../Alert/Alert';
import { chartDays } from '../../Helper/constant'

Chart.register(CategoryScale)


function CoinInfo({historicData,setDays,setCoinInterval,days,currency}){

   function handleDayChange(e){
      console.log(e.target.options[e.target.selectedIndex].value);
      const daysSelected = e.target.options[e.target.selectedIndex].value;
      if(daysSelected == 1) {
          setCoinInterval?.('');
      } else {
          setCoinInterval?.('daily');
      }
      setDays?.(e.target.options[e.target.selectedIndex].value);
  }
   

   if(!historicData){
      return <Alert message="No data available for this coin" type='info'/>
   }


   return(
      <>
      <div
            className="flex flex-col items-center justify-center mt-6 p-6 w-full"
        >

        <div className="h-[500px] w-full">
          <Line
            data={{
         
            label:historicData.prices.map(coinPrice=>{
              let date = new Date(coinPrice[0])
              let time = date?.getHours() > 12 ? `${date?.getHours() - 12}:${date?.getMinutes()} PM` : `${date?.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString();
            }),
            
            dataset:[
               {
                     
                        label:`price (past ${days==1?'day':'days'} Days in ${currency.toUpperCase()})`,
                        data:historicData.prices.map(coinPrice=>coinPrice[1])
               }
            ]
         }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
             elements:{
               point:{
                  radius:0
               }
             }
            }}
          />
        </div>
        <div className="flex justify-center mt-5 w-full">
                <select className="select select-primary w-full max-w-xs" onChange={handleDayChange}>
                    {chartDays.map((day, index) => {
                        return (
                            <option selected={days == day.value} key={index} value={day.value}> {day.label}</option>
                        )
                    })}
                </select>
                

            </div>
        </div>
      </>
   )
}
export default CoinInfo