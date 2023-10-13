import React from 'react'
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { TrackCard } from './Genre';
import Carousel from 'react-bootstrap/Carousel';



function Playlist() {
    const {recommendations} = useContext(TrackCard)
console.log(recommendations)

  return (
    <div>
       <Carousel>
            {recommendations.map((track, index) => (
              <Carousel.Item>
        <Card className='Card'>
            <Card.Img maxwidth={'15px'}  variant="top" src={track.album.images[0].url} />
            <Card.Body>
             <a href={track.external_urls.spotify}> <Card.Title>{track.name}</Card.Title></a> 
              <Card.Text>{track.artists[0].name}
              </Card.Text>
            </Card.Body>
          </Card>
          </Carousel.Item>
                
          ) )}  
     </Carousel>
      
    </div>
  )
}

export default Playlist