import { setCookie } from "cookies-next"

export default async function handler(req, res) {
  const token = {
    'authToken': 'repanganteng',
    'refreshToken' : '123456'
  }
  setCookie('token', token, { 
    req, 
    res, 
    maxAge: 60 * 60 * 60 * 2,
    sameSite: 'strict',
    httpOnly: true
})
  res.status(200).json({ name: 'Cookie Setted' })
}
