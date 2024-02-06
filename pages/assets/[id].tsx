import { DetailsCoins } from "@/api/functions/allcoinsapi"
import { useRouter } from "next/router";
import { useQuery } from "react-query"
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material';


interface coinsdetail {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
}



const IdData = () => {


    const router = useRouter();
    const { id } = router.query;

if (id){
    const { data: singleasset, isLoading, error } = useQuery({
        queryKey: ["data"],
        queryFn: () => DetailsCoins(String(id))
    });
    console.log("data ID:", )

    return (

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color:"red"}}>Coin Name</TableCell>
                        <TableCell sx={{color:"red"}}>Price</TableCell>
                        <TableCell sx={{color:"red"}}>Change</TableCell>
                        <TableCell sx={{color:"red"}}>24h Volume</TableCell>
                        <TableCell sx={{color:"red"}}>MAx SUpply</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow >
                        <TableCell>
                           {singleasset?.name}
                           
                        </TableCell>
                        <TableCell>
                        {singleasset?.priceUsd}

                        </TableCell>
                        <TableCell>
                        {singleasset?.changePercent24Hr}


                        </TableCell>
                        <TableCell>
                        {singleasset?.volumeUsd24Hr}
                        </TableCell>
                        <TableCell>
                        {singleasset?.supply}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    )





}
}
export default IdData
