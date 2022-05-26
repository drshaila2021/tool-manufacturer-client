import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase";
import NavBar from "./Pages/Shared/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Pages/Dashboard/Payment";
import NotFound from "./Pages/NotFound";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AllOrders from "./Pages/Dashboard/AllOrders";
import ManageItem from "./Pages/Dashboard/ManageItem";
import ContactUs from "./Pages/Home/ContactUs";
import Tools from "./Pages/Home/Tools";
import MyPortfolio from "./Pages/MyPorfolio/MyPortfolio";
import Blogs from "./Pages/Home/Blogs";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/products" element={<Tools></Tools>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>

        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route
            path="/dashboard/myprofile"
            element={<MyProfile></MyProfile>}
          ></Route>
          <Route
            path="/dashboard/addreview"
            element={<AddReview></AddReview>}
          ></Route>
          <Route
            path="/dashboard/users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/orders"
            element={
              <RequireAdmin>
                <AllOrders></AllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/items"
            element={
              <RequireAdmin>
                <ManageItem></ManageItem>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/payment/:id"
            element={<Payment></Payment>}
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
