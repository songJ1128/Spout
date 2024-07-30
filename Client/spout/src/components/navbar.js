import { Link } from "react-router-dom";
//import '../css/Navbar.css'; 
 function Navbar() {
    return (
        <nav>
            <Link to="/home"><button>link 1</button></Link>
            <Link to="/home"><button>link 2</button></Link>
            <Link to="/home"><button>link 3</button></Link>
            <Link to="/analytics"><button>stats</button></Link>
            <Link to="/voting"><button>vote</button></Link>
        </nav>
    );
 }

 export default Navbar;