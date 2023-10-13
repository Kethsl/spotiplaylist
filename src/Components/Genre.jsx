import React from 'react'
import { useEffect, useState } from 'react'
import Playlist from './Playlist'
import "../Components/Genre.css"
import { createContext } from 'react'
import tsParticles from './TsParticles'



export const TrackCard = createContext()

function Genre() {
    const [accessToken, setAccessToken] = useState("")
    const [genres, setGenres] = useState([])
    const [usergenre, setUserGenre] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [name, setName] = useState("")
    const [Href, setHref] = useState("")
    const [images, setImages] = useState("")
    const [Artist, setArtist] = useState("")


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
                    .then((data) => setGenres(data.genres))
            })
            
    }, [])
    function toggleGenre(genre) {
        
        if (usergenre.includes(genre)) {
          setUserGenre(usergenre.filter((e) => e !== genre));
        } else {
        
          if (usergenre.length < 5) {
            setUserGenre([...usergenre, genre]);
          }}}
    function PickGenre() {

       


        if (usergenre.length !== 5) {
            return "Must select 5 genres"
        } else {
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
                    fetch(`https://api.spotify.com/v1/recommendations?limit=15&seed_genres=${usergenre.join('%2C')}`, authorization)
                        .then((response) => response.json())
                        .then((data) => {
                            setRecommendations(data.tracks)
                            setName(data.tracks[0].name)
                            setHref(data.tracks[0].external_urls.spotify)
                            setImages(data.tracks[0].album.images[0].url)
                            setArtist(data.track[0].artists.name)
                        }
                        )
                })









        }
    }


console.log(recommendations.length)


    return (
        <div>
          {
          
          recommendations.length === 0 ? (
            <div>
              <h1 className="Pick">Pick Your Top 5 Genres</h1>
               <img className='headphones' src="../public/images/giphy.gif" alt='' /> 
              <div className="border">
              \
                {genres.map((genre, index) => (
                  <button
                    key={index}
                    className={`genre ${usergenre.includes(genre) ? "selected" : ""}`}
                    value={genre}
                    onClick={() => toggleGenre(genre)}
                  >
                    {genre}
                  </button>
                ))}
                <button className="Submit" onClick={PickGenre}>
                  Get Playlist!
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="Mix">Your Mix: Groove on!</h1>
              <TrackCard.Provider value={{ recommendations }}>
                <Playlist />
              </TrackCard.Provider>
            </div>
          )}
        </div>
      );
    }
    


            export default Genre




