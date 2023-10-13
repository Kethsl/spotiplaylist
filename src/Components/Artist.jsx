function Artist() {
    const [accessToken, setAccessToken] = useState("")
    const [artists, setArtists] = useState([])
   
    useEffect(() => {
        let authParem = {
            method: 'POST',
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials&client_id=" + import.meta.env.VITE_REACT_APP_CLIENT_ID + '&client_secret=' + import.meta.env.VITE_REACT_APP_CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParem)
            .then((response) => response.json())
            .then((data) => data.access_token)
            .then((accessToken) => {

                let authorization = { 
                    method: 'GET', 
                    headers: { 
                        'Content-Type': 'application/json', 
                        Authorization: "Bearer " + accessToken 
                    } 
                }
                console.log(authorization)
                fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds/", authorization)
                    .then((response) => response.json())
                    .then((data) => setArtists(data.artists))
            })

    }, [])

    return (
        <div>
           {genres.map((genre)=><button>{genre}</button>)}


        </div>
    )
}

export default Artist