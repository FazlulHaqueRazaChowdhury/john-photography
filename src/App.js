import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import Checkout from './Components/Checkout/Checkout';
import About from './Components/About/About';
import RequireAuth from './Auth/RequireAuth';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/checkout/:id" element={<RequireAuth>
          <Checkout />
        </RequireAuth>}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
