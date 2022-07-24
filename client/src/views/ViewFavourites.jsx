import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ItemCard from "../components/ItemCard";
// import { useDispatch, useSelector } from "react-redux";



export default function ViewFavourites() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const url = `https://rayhan-books2.herokuapp.com/favourites`
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setBooks(data)
                return
            })
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

    }, [])

    return (
        <div className=" bg-slate-400 p-5 mx-auto rounded-lg items-center">
            <div className="">
                <span className="text-xl font-bold text-center p-2 text-slate-100 bg-slate-800 m-5 rounded-lg"> Favourite List</span>

            </div>
            <div className="mx-auto w-full flex flex-row flex-wrap ">
                {books.map((book, num) => (
                    <ItemCard book={book} key={num} />
                ))}
            </div>
        </div>

    )
}