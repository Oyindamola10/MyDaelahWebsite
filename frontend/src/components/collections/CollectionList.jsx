import React from 'react'
import Collection from './Collection'
import './Collection.css'

const CollectionList = ({handleClick}) => {
    const collection=[
        {
            id: 1,
            image: "https://i.imgur.com/KIYAxB5.jpg",
            name:" Ladies Watch Set",
            Price: "NGN25000"
          },
          {
            id: 2,
            image: "https://i.imgur.com/X559nMk.jpg",
            name: "Black Female Bracelet",
            Price: "NGN5,500"

        },
        {
         id: 3,
            image: "https://i.imgur.com/ldkNFqc.jpg",
            name:"Quality Leather Belt",
            Price: "NGN12,000"
        },
         {
            id: 4,
            image: "https://i.imgur.com/u0J2nel.jpg",
            name: "Gucci Sunglasses",
            Price: "NGN13,000"
         },
         {
            id: 5,
            image: "https://i.imgur.com/9XdxFC4.jpg",
            name: "Quality Leather Wristwatch",
            Price: "NGN23,000"
         },
         {
            id: 6,
            image: "https://i.imgur.com/BJl3aRD.jpg",
            name: "Necklace",
            Price: "NGN10,500"
         },
         {
            id: 7,
            image: "https://i.imgur.com/UMUUAv7.jpg",
            name: "Prada Sunglasses",
            Price: "NGN15,000"
         },
         {
            id: 8,
            image: "https://i.imgur.com/JYx2ch9.jpg",
            name: "Quality Leather Wristwatch",
            Price: "NGN23,000"
         },
         {
            id: 9,
            image: "https://i.imgur.com/sMcA7cu.jpg",
            name: "Quality Leather Belt",
            Price: "NGN12,000"
         },
         {
            id: 10,
            image: "https://i.imgur.com/9Zr0sww.jpg",
            name: "Armpit Purse",
            Price: "NGN25,000"
         },
         {
            id: 11,
            image: "https://i.imgur.com/8tCu2Jk.jpg",
            name: "Sunglasses",
            Price:"NGN13,000"
         },
         {
            id: 12,
            image: "https://i.imgur.com/BJl3aRD.jpg",
            name: "Necklace",
            Price: "NGN10,500"
         },
         {
            id: 13,
            image: "https://i.imgur.com/AgKdZ4n.jpg",
            name: "Necklace",
            Price: "NGN10,500"
         },
         {
            id: 14,
            image: "https://i.imgur.com/KQdgttt.jpg",
            name: "Earrings + Pendant",
            Price: "NGN8,500"

        },
        {
         id: 15,
            image: "https://i.imgur.com/JRoBu6Z.jpg",
            name: "Silver Necklace",
            Price: "NGN15,000"

        }
       
    ]
  return (
    <div className='collectionsImg'>
    { collection.map(({name,Price,image},id) =>(
    <Collection 
    key={id}
    name={name}
    price={Price}
    image={image}
    handleClick={handleClick}
    />))}
    </div>
  )
}

export default CollectionList