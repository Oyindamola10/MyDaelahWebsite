import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useAppContext } from "../context/AppContext";
import './Search.css'


const SearchPage = () => {
    const [searchedItems, setSearchedItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:8088/api/product/${id}`);

            setSearchedItem(response.data.postData);
        }

        getData();
    }, [id])
    const { incrCart } = useAppContext();


    return (
        <div>
            {
                searchedItems?.length ? (
                    <div className='searchCard'>
                        {searchedItems.map(item => (
                            <div style={{ color: 'white', background: 'black' }}>
                                <img src={item.image} />
                                <p>{item.name}</p>
                                {/* <p id='priceColor'>{item.Price}</p> */}
                                <button onClick={() => incrCart()} id='btnSearch'>Add To Cart</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ background: 'Black', color: "White"}}>
                        No Search Results
                    </div>
                )
            }
        </div>
    )
}

export default SearchPage;
