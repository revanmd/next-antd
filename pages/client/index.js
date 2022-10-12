import { useEffect } from "react"
import { getCookie } from "cookies-next";
import axios from "axios";

export async function getServerSideProps({req, res}) {
    return {
      props: {
        'token': getCookie('token',{req,res})
      } // will be passed to the page component as props
    }
  }

const Client = ({token}) => {

    const fetchDataDashboard = () => {
        axios({
            url: '/api/request',
            data: {
                'method': 'POST',
                'endpoint': '/dashboard',
                'data': {
                    'type':'plant1B'
                }
            }
        })
    }

    const fetchCookie = () => {
        console.log('below is the cookies')
        console.log(getCookie('token'))
        console.log('--------------------------------')


        console.log('below is the cookies from server')
        console.log(token)
        console.log('--------------------------------')
    }

    useEffect(()=>{
        fetchCookie()
    },[])

    return (
        <>
            This is client page
        </>
    )
}

export default Client