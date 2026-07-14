import Hero from "./components/home/hero/Hero";
import Developer from "./components/home/developer/Developer";
import Security from "./components/home/security/Security";
import { Box } from "@mui/material";

export default function Home() {
  return (
     <Box
     component="main"
     >
     <Hero/>
     <Developer/>
     <Security/>
     </Box>
  )
}
