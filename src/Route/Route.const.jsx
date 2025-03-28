import Home from "../Pages/Home/Home.jsx"
import Movies from "../Pages/Movies/Movies.jsx"
import Movie from "../Pages/Movie/Movie.jsx"
import Cart from "../Pages/Cart/Cart.jsx"
import Layout from "../Components/ShareComponents/Layout/Layout.jsx"
import Login from "../Pages/login/Login.jsx"
import Dashboard from "../Pages/dashboard/Dashboard.jsx"
import Category from "../Pages/category/Category.jsx"



export const routes=[
{
    path : "/",
    element:<Layout><Home /></Layout>,
    isprivate:false
},
{
    path : "/movies",
    element: <Layout><Movies/></Layout>,
    isprivate:false
},
{
    path : "/movies/:id",
    element: <Layout><Movie/></Layout>,
    isprivate:false
},
{
    path : "/cart",
    element: <Layout><Cart/></Layout>,
    isprivate:false
},
{
    path : "/login",
    element: <Login/>,
    isprivate:false
},
{
    path : "/dashboard",
    element: <Layout><Dashboard/></Layout>,
    isprivate:true
},
{
    path : "/category",
    element: <Layout><Category/></Layout>,
    isprivate:false
}
]