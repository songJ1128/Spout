import { Link } from "react-router-dom";
function LandingPage() {
    // const goToLoginRateMe = async () => {
    //     try {
          
    //       const response = await fetch('http://localhost:8080/thisauth/next');
    //       if (response.ok) {
    //         const url = await response.json();
    //         window.location.href = url.url;
    //       }
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
    return (
        <div>
            <Link to="/login">
                <button> Login to RateMe </button>
            </Link>
        </div>

    );
};

export default LandingPage;