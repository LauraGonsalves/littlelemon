import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Menu.css"
import axios from 'axios';

const Menu = () => {
  const [menuItem, setMenuItem] = useState([])
const min=200
const max=1000
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://the-mexican-food-db.p.rapidapi.com/',
        
          headers: {
            'X-RapidAPI-Key': 'd3bd14d774mshfe1b3e17da3f3b5p107010jsn68c9ab5a023a',
            'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
          }
         
        };

        const response = await axios.request(options);
        setMenuItem(response.data.slice(0,21)); // Assuming the API response is an array of menu items
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuItems();
  }, []);




  return (
    <div className='card-row mt-4 ps-5 d-flex flex-wrap '>

      {menuItem.map(e => {
        return (
          <Card className="me-3 mb-3 col-lg-4" style={{ width: '26rem' }} key={e.id}>
            <Card.Img variant="top" src={e.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title className='txt'>{e.title}  </Card.Title><span className='font'>BDT {Math.floor(Math.random()*(max-min+1)+min)}</span> 
              <Card.Text className='txt'>
              Lorem ipsum dolor sit amet. Et voluptates corporis non autem itaque id fugit quia id odit consequatur est suscipit aperiam eos inventore illo ab ipsum laboriosam. Sit nisi consequatur qui dolor totam id vero praesentium cum velit soluta aut mollitia nemo! Qui dolores dolor id pariatur doloribus rem.
              </Card.Text>
              <Button className='button-color'>Order Now</Button>
            </Card.Body>
          </Card>

        )
      })}
    </div>
  )
}

export default Menu