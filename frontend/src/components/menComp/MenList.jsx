import React from 'react'
import Men from './Men'
import './Men.css'

const MenList = ({handleClick}) => {
    const men=[
        {
          id: 1,
          image: "https://i.imgur.com/GgCbhul.jpg",
          name: "VC Chain Wristwatch ",
          Price: "NGN25,000",
          
        },
        {
          id: 2,
          image: "https://i.imgur.com/MGZfnOe.jpg",
          name: "AP Leather Wristwatch ",
          Price: "NGN25,000"
        },
        {
          id: 3,
          image: "https://i.imgur.com/sRPBX3r.jpg",
          name: "Rolex Wristwatch ",
          Price: "NGN95,000"
        },
        {
          id: 4,
          image: "https://i.imgur.com/biuiNMj.jpg",
          name: "Casio Wristwatch ",
          Price: "NGN12,000"
        },
        {
          id: 5,
          image: "https://i.imgur.com/U7qXTW6.jpg",
          name: "Casio Wristwatch ",
          Price: "NGN12,000"
        },
        {
          id: 6,
          image: "https://i.imgur.com/1B4u22B.jpg",
          name: "Casio Wristwatch ",
          Price: "NGN12,000"
        },
        {
          id: 7,
          image: "https://i.imgur.com/EL659AS.jpg",
          name: "Michael Kors Watch",
          Price: "NGN30,000"
        },
        {
          id: 8,
          image: "https://i.imgur.com/bc7lYur.jpg",
          name: "Michael Kors Watch",
          Price: "NGN30,000"
        },
        {
          id: 9,
          image: "https://i.imgur.com/N47JheW.jpg",
          name: "Michael Kors Watch",
          Price: "NGN30,000"
        }
      
        
      ]
  return (
    <div className='menCard'>
         { men.map(({name,Price,image},id) =>(
         <Men 
         key={id}
         name={name}
         price={Price}
         image={image}
         handleClick={handleClick}
         />))}
    </div>
  )
}

export default MenList