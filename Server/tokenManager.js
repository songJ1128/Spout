let access_token = null;

const getAccessToken = () => access_token;
const setAccessToken = (token) =>{
    access_token = token;
}

module.exports = {
    getAccessToken,
    setAccessToken
};