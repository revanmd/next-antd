import { getCookie } from "cookies-next";

export default async function handler(req, res) {
    let cookies = getCookie('token',{req,res})
    res.status(200).json({ cookies: JSON.parse(cookies) })
}
