import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import veg from "../../Assests/1.png"
import italian from "../../Assests/2.png"
import seafood from "../../Assests/8.png"
import "./Cards.css"
const Cards = () => {

  const restaurants = [
    {
      id: 1,
      name: 'Italian Delights',
      image: italian,
      description: 'Enjoy our authentic Italian cuisine made with the finest ingredients. From classic pasta dishes to wood-fired pizzas, we have something for everyone.',
      buttonText: 'View Menu'
    },
    {
      id: 2,
      name: 'Seafood Sensations',
      image: seafood,
      description: 'Indulge in the freshest seafood caught daily from the ocean. Our expert chefs prepare mouthwatering dishes that will leave you craving for more.',
      buttonText: 'Reserve Table'
    },
    {
      id: 3,
      name: 'Vegan Delights',
      image: veg,
      description: 'Discover a world of plant-based flavors with our diverse vegan menu. From hearty salads to innovative vegan entrees, we cater to your healthy lifestyle.',
      buttonText: 'Explore Options'
    }
  ];
  return (
    <div className='card-row mt-4 ps-5 d-flex flex-row ' id='aboutUs'>

      {restaurants.map(e => {
        return (
          <Card className="me-3 mb-3"  style={{ width: '26rem' }} key={e.id}>
            <Card.Img variant="top" src={e.image}  style={{ width: '100%', height: '300px', objectFit: 'cover' }}/>
            <Card.Body>
              <Card.Title className='txt'>{e.name}</Card.Title>
              <Card.Text className='txt'>
                {e.description}
              </Card.Text>
              <Button className='button-color'>{e.buttonText}</Button>
            </Card.Body>
          </Card>

        )
      })}


    </div>
  )
}

export default Cards