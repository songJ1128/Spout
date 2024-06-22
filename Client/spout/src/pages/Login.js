function Login() {
    const fetchData = async () => {
        try {
          console.log("this 1");
          const response = await fetch('http://localhost:8080/auth/login');
          if (response.ok) {
            const url = await response.json();
            console.log("here");
            window.location.href = url.url;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    return (<button onClick={fetchData}>login</button>);
};

export default Login;