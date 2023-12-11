import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';



const Search = () => {

    const navigate = useNavigate();

    const search = (e) => {
        const { value } = e.target;
        if (!value.length) {
            return;
        }
        navigate(`/search/${value.trim()}`)
    }

    return (
        <Form className="d-flex">
            <Form.Control type="text" onChange={(e) => search(e)} placeholder="Search " className="me-2" aria-label="Search" />
        </Form>
    )
}

export default Search