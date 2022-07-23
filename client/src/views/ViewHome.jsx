import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ItemCard from "../components/ItemCard";
// import { useDispatch, useSelector } from "react-redux";



export default function ViewHome() {

    // const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])


    // useEffect(() => { //FETCH TASK
    //     const url = `http://localhost:3000/`
    //     fetch(url)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not OK');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //             // console.log(tasksStore,`ini tasks store<<,`)
    //             // setTasks(data)
    //             dispatch({
    //                 type: 'tasks/fetchSuccess',
    //                 payload: data
    //             })
    //         })
    //         .catch(error => {
    //             console.error('There has been a problem with your fetch operation:', error);
    //         });

    // }, [])

    const searchHandle = (e) => {
        e.preventDefault()
        const url = `http://localhost:3000?query=${query}`

        console.log(query)
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
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

    }

    return (
        <div className="bg-slate-400 p-4 rounded-lg">
            <form className=""
                onSubmit={searchHandle}>
                <input
                    className="p-1 rounded mx-1"
                    type="text"
                    placeholder="Type here..."
                    onChange={(e) => { setQuery(e.target.value) }}></input>
                <button className="bg-slate-700 text-white p-1 rounded mx-1 "
                >Search Boooks</button>
            </form>

            <div className="mx-auto w-full flex flex-row flex-wrap ">
                {books.map((book, num) => (
                    <ItemCard book={book} key={num} />
                ))}

            </div>




        </div>

    )
}