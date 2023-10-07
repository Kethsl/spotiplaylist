import React from 'react'
import { useEffect,useState } from 'react'

const Client_Id= "3c91c52c4dc14fb2b0b9fadd358f47f4"
const Client_Secret= "7c00a5e0e21e42c289aa6ddeb6c77a5d"

function Genre() {
    const [accessToken,setAccessToken]=useState("")

useEffect(() => {
let authParem={
method:'POST',
headers:{'Content-Type':"application/x-www-form-urlencoded"
},
body:"grant_type=client_credentials&client_id="+ Client_Id+'&client_secret='+ Client_Secret
}
 fetch('https://accounts.spotify.com/api/token', authParem)
 .then((response) => response.json())
 .then((data) => console.log(data.access_token))

},[])

  return (
    <div>


    </div>
  )
}

export default Genre