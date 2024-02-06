import { HttpStatusCode } from "axios";
import axiosInstance from "../axiosinstance/api"
import { endpoint } from "../endpoints/endpoint"


export interface baseApiResponce {
    status: HttpStatusCode;
    data: any
}


/// assets 
export const Fetchcoins = async () => {
    const res = await axiosInstance.get<any>(endpoint.coins.getAllCoins)
    return res.data.data

}
export const DetailsCoins = async (id: string | number) => {
    const res = await axiosInstance.get(`https://api.coincap.io/v2/assets/${id}`)
    return res.data.data
}
export const FetchHistory=async(id:String| number)=>{
    const res = await axiosInstance.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
    return res
}



//// market 
export const MarketList = async () => {
    const res = await axiosInstance.get(`https://api.coincap.io/v2/markets`);
    return res.data.data
}


///// exchange list
export const ExchangeList = async () => {
    const res = await axiosInstance.get(`https://api.coincap.io/v2/exchanges`);
    return res.data.data
}

export const ExchangeIdData = async (id: string | number) => {
    const res = await axiosInstance.get<any>(`'https://api.coincap.io/v2/exchanges/${id}`);
    return res.data?.data
}



// ////// rate page 


export const RatePageData= async ()=>{
    const res= await axiosInstance.get(`https://api.coincap.io/v2/rates`) ;
    return res?.data.data
}


export const RatePageID =async(id:String)=>{
    const res = await axiosInstance.get(`https://api.coincap.io/v2/rates/${id}`)
     return res?.data.data
}


