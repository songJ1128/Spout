function LandingPage() {

    const goToLoginRateMe = async () => {
        try {
          
          const response = await fetch('http://localhost:8080/thislogin');
          if (response.ok) {
            const url = await response.json();
            window.location.href = url.url;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    return (
        <button onClick={goToLoginRateMe}> Login to RateMe </button>

    );
};

export default LandingPage;