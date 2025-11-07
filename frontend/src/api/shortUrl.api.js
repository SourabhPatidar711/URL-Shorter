import axiosInstance from "../utils/axiosInstance.js";

const createShortUrl = async (longUrl,slug) => {
    const {data} = await axiosInstance.post("/api/create",{url:longUrl,slug});
    return data
}



export{
    createShortUrl,
}