import { Routes, Route, Link } from "react-router-dom";
import ViewFavourites from "./views/ViewFavourites";
import ViewHome from "./views/ViewHome";



export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* NAVBAR */}
      <header className="flex items-center justify-between py-2 bg-slate-800 ">
        <span to="/" className="text-xl uppercase font-bold text-slate-100 pl-3">Books App - Travelio</span>
        <ul className="inline-flex items-center">
          <li className="px-2 md:px-4">
            <Link to="/" className="cursor-pointer font-semibold text-slate-100">
              Home
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/favourites" className="cursor-pointer font-semibold text-slate-100">
              Favourites
            </Link>
          </li>
        </ul>
      </header>


      <div className="container w-3/4 bg-slate-200 mx-auto mt-8 rounded mb-5">
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route path="/favourites" element={<ViewFavourites />} />
        </Routes>

      </div>

      {/* <div className="container bg-slate-200 sm">
        <Routes>
          <Route path="/" element={<ViewHome />} />
        </Routes>
      </div> */}
    </div>

  )
}

