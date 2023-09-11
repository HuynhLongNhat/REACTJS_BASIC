import logo from "./logo.svg";
import "./App.scss";
import Mycomponent from "./Example/Mycomponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" element={<ListTodo />}></Route>
            <Route path="/about" element={<Mycomponent />}></Route>
            <Route path="/user" element={<ListUser />}></Route>
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
