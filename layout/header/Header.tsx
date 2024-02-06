// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import { LinkOff } from "@mui/icons-material"
import { Link } from "@mui/material"

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
 const Header=()=>{
  return(
    <>
    <ul>
      <li><Link href="/"></Link></li>
      <li><Link href="/market">MARKET</Link></li>
      <li><Link href="/exchange">EXCHANGE</Link></li>
      <li><Link href="/ratepage">RATE</Link></li>
      {/* <li><Link href="/history">History</Link></li> */}
    </ul>
    </>
  )
}
export default Header