import { ExchangeIdData } from "@/api/functions/allcoinsapi"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
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
if(id){
    const { data,isLoading, error } = useQuery({
        queryKey:["idexchange",{id} ],
        queryFn: () => ExchangeIdData (String(id)),
        enabled: !!id

    });
     console.log("exchange Id:",id)
    console.log("exchange id data:",data)


return(
    <TableContainer>
    <Table >
<TableHead>
 <TableRow >
   <TableCell sx={{color:"red"}}>Coin Name</TableCell>
   <TableCell sx={{color:"red"}}>Price</TableCell>
   <TableCell sx={{color:"red"}}>Change</TableCell>
   <TableCell sx={{color:"red"}}>24h Volume</TableCell>
 </TableRow>
</TableHead>
<TableBody >
 {/* { data?.map((  key:any) => ( */}
   <TableRow >
     <TableCell>
        {data.exchangeId}
        
       
     </TableCell>
     <TableCell>
        {data.name}
     
   
     </TableCell>
     <TableCell>
        {data.volumeUsd}
      
   
     </TableCell>
     <TableCell>
        {data.socket}
        
     
     </TableCell>
   </TableRow>
 {/* ))} */}
</TableBody>
</Table>      
</TableContainer>


)

}
}
