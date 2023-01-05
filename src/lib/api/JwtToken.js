import axios from "axios"

export const checkToken = async (refresh_token) => {
    
        axios.post("/auth/refreshToken", {code : refresh_token, hedaers: {
            "Content-Type":`application/json`,
        }})
        .then(res => {
            axios.defaults.headers.common['Authorization'] = 'Bearer' + res.data;
            
        })
        .catch(ex => {
            console.log("새로운 access token을 받는 데 실패하였습니다.");
        })
};


