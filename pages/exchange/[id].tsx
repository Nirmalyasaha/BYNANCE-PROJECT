import { ExchangeIdData } from "@/api/functions/allcoinsapi"
import { useRouter } from "next/router"
import { useQuery } from "react-query"





interface IDexchangeData {

    exchangeId: string
    name: string
    rank: string
    percentTotalVolume: string
    volumeUsd: string
    tradingPairs: string
    socket: boolean
    exchangeUrl: string
    updated: number
}
export default function ExchangeId() {

    const router = useRouter();
    const { id } = router.query

    const { data,isLoading, error } = useQuery({
        queryKey:["idexchange"],
        queryFn: () => ExchangeIdData (String(id)),
        

    });
    // console.log("exchange Id:",id)
    console.log("data:",data)




}

