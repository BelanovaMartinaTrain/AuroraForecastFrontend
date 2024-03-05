"use server";

const axios = require("axios").default;

export default async function axiosData(url: string) {
    try {
        const res = await axios.get(url);
        console.log(res.data);
        if (res.status === 200 || res.status === 304) {
            return res.data;
        } else {
            throw new Error("ERROR: Couldn't fetch the data");
        }
    } catch (error) {
        console.error(error);
    }
}
