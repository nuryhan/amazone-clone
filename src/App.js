import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51K2raDAz0gope1evaNq9ak6CcBqUBMIwQprWBTNghjulxOixuXtloEkSwSXQIEzOPnsmp3MAqa5V0qn4XM9cCNfc00A91bQWBh"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // if user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>

        <Route
          exact
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>

        <Route
          exact
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        ></Route>

        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/orders" element={<Orders />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
