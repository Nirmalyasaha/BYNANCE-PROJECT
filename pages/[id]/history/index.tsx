import { FetchHistory } from "@/api/functions/allcoinsapi"
import { useRouter } from "next/router";
import { useQuery } from "react-query"


export default function HistoryPage(){

    const router=useRouter();
    const {id}=router.query;

    const {data,isLoading,error}=useQuery({
        queryKey:["HistoryPage"],
        queryFn: ()=> FetchHistory(String(id))
    });
    console.log("history date",data);

}