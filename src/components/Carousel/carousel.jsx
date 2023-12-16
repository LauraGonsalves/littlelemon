import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const carousel = () => {

    const Review = [{

        id: 1,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        name: "Diya Maria ",
        content: "Nulla vitae elit libero, a pharetra augue mollis interdum. mollis interdum e elit libero, a pharetra augue"
    },
    {
        id: 2,
        img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
        name: "Eddie Veno",
        content: "Nulla vitae elit libero, a pharetra augue mollis interdum. mollis interdum e elit libero, a pharetra augue"
    }

    ]

    return (<div className='mb-5'>

        <Carousel>
            {Review.map(e => {
                return (

                    <Carousel.Item key={e.id}>
                        <img
                            className="d-block w-100"
                            style={{ height: "430px", filter: "brightness(0.6)" }}
                            src={e.img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{e.name}</h3>
                            <p>{e.content}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel></div>
    );
}

export default carousel;