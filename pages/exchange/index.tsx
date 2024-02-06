import { ExchangeList } from "@/api/functions/allcoinsapi";
import { useQuery } from "react-query";
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material';



 interface ExchangeData{
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


export default function Exchange(){

    const { data,  error } = useQuery({
        queryKey: ["exchange"],
        queryFn: ExchangeList
    })
    console.log("exchange data:",data);

    return(
      <>

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
     { data?.map(( exData:ExchangeData, key:any) => (
       <TableRow key={key.exchangeId}>
         <TableCell>
            <Link href={`/exchange/${exData.exchangeId}`}>
         {exData.name}
         </Link>
         </TableCell>
         <TableCell>
            {exData.rank}
       
         </TableCell>
         <TableCell>
            {exData.volumeUsd}
       
         </TableCell>
         <TableCell>
            {exData.updated}
         
         </TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>      
   </TableContainer>

   </>
    )
}

