import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack direction="row" alignContent="center" p={2} sx={{zIndex:2, position:"sticky", background:"#000", top:0, justifyContent:"space-between"}}>
      <Link to="/" style={{display: "flex", alignItems:"center"}}>
        <img src={logo} alt="Logo" height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  );
export default Navbar;