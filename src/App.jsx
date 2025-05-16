import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Movie } from "./pages/Movie"
import { Contact, contactData } from "./pages/Contact"
import Applayout from "./component/layout/AppLayout"
import "./App.css"
import { Error } from "./pages/Error"
import { GetApiData } from "./api/GetApiData"
import { MovieDetails } from "./component/UI/MovieDetails"
import { GetMovieDetails } from "./api/GetMovieDetails"
// import { Children } from "react"


const App = () => {
  const newRouter = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetApiData
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: GetMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ]
    },
  ])

  return <RouterProvider router={newRouter} />
}
export default App










