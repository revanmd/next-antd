import axios from "axios"


export default async function handler(req, res) {
    const ENDPOINT = req.body.endpoint
    const BASEURL = 'http://api-teman.pusri.co.id' + ENDPOINT
    const BODY = req.body.data
    const METHOD = req.body.METHOD

    axios({
        url: BASEURL,
        method: METHOD,
        data: BODY,
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'AuthToken'
        }
    }).then(function(response){
        return res.status(200).json(response.data)
    }).catch(function(error){
        return res.status(500).json(error.response.data)
    })
  }
  