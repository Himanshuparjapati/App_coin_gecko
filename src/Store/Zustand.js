import { create } from "zustand";


const Zustand=create((set)=>({
     currency:'usd',
    setCurrency:(newCurrency)=>set((state)=>{
        return{
            ...state,
            currency:newCurrency
        }
    })
})
)
export default Zustand