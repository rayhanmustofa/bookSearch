import { useLocation } from "react-router-dom";
import Ratings from 'react-ratings-declarative';
import Swal from "sweetalert2";


export default function ItemCard({ book }) {
    const location = useLocation()
    const handleDetail = (id) => {
        // navigate(`/${id}`)
    }

    const addFavourite = (e) => {
        e.preventDefault()
        // console.log('test')
        // console.log(book)

        const url = `http://localhost:3000/favourites`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: book })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                Swal.fire(
                    'Success Adding to Favourites!',
                    'success'
                )

            })
            .catch(error => {
                console.log(`ERROR`)
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                })
            })
    }





    return (
        <div className="mx-auto flex w-96 min-h-full flex-row justify-center bg-white rounded-2xl shadow-xl shadow-slate-900/60 my-5 p-2">

            <img className="aspect-[3/5] w-30 rounded-2xl object-fit border" src={book.image} />
            <div className="p-4 flex-col w-60">
                <h3 className="text-lg font-medium text-slate-600 pb-2">{book.title}</h3>
                <p className="text-sm tracking-tight font-light text-slate-700 leading-6 mr-3">Author(s): {book.authors ? book.authors.join(`, `) : <span>Not available</span>} </p>
                <div>
                    <span className="text-sm tracking-tight font-light text-slate-700 leading-6 mr-3">Rating : </span>
                    {!book.rating ? <span className="text-sm tracking-tight font-light text-slate-700 leading-6 mr-3"> Not available</span> : <Ratings
                        rating={book.rating}
                        widgetDimensions="19px"
                        widgetSpacings="1px"
                    >
                        {[1, 2, 3, 4, 5].map((el, num) => (
                            <Ratings.Widget key={num} widgetRatedColor="orange" />
                        ))}
                    </Ratings>}


                </div>
                {location.pathname === `/` && <button className="rounded p-1 text-sm tracking-tight font-light text-slate-100 bg-slate-800 mt-2"
                    onClick={addFavourite}>Add to Favourites </button>}
                
            </div>
        </div>

    )
}