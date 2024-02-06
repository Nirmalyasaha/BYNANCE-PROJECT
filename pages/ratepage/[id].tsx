import { RatePageID } from "@/api/functions/allcoinsapi";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material';


interface RateId{
    id: string
  symbol: string
  currencySymbol: string
  type: string
  rateUsd: string
}

export default function FetchId(){

    const router=useRouter();
    const {id}=router.query;

    const {data,isLoading,error}=useQuery({
        queryKey:["ratePageId"],
        queryFn: ()=>RatePageID(String(id))

    });
    console.log("rate page Id::",data)
    // return(
    //     <h1>{data.id}</h1>
        
    // )

}