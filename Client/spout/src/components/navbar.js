import { Link } from "react-router-dom";
//import '../css/Navbar.css'; 
 function Navbar() {
    return (
        <nav>
            <Link to="/"><button>link 1</button></Link>
            <Link to="/"><button>link 2</button></Link>
            <Link to="/"><button>link 3</button></Link>
            <Link to="/"><button>link 4</button></Link>
            <Link to="/"><button>link 5</button></Link>
        </nav>
    );
 }

 export default Navbar;