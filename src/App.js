import HookForm from "./components/HookForm"
import { Component, useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import "./dist/css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [login, setLogin] = useState(false)

  var MockAdapter = require("axios-mock-adapter");
  var mock = new MockAdapter(axios);
  mock.onPost("/login", { params: { email: "admin", password: "admin" } }).reply(200, {
    result: true
  });
  mock.onPost("/login", { params: { email: "a", password: "a" } }).reply(200, {
    result: false
  });
  const Swal = require('sweetalert2')


  const onSubmit = (data) => {

    try {

      axios.post("/login", { params: { email: data.email, password: data.password } }).catch(err => {
        showSwal(false);
        throw Error;
      }).then(function (response) {
        let result = response.data.result;
        showSwal(true);
        setLogin(true)
      })
    } catch (err) {
      console.log("catch")
    }

  };

  const showSwal = (tempBool) => {
    Swal.fire({

      animation: false,
      icon: `${tempBool ? 'success' : "error"}`,
      title: `${tempBool ? "Logged In Succesfully" : "Check data (admin,admin)"}`,
      showConfirmButton: false,
      timer: 1500

    })
  }

  return (
    <div className="App" >
      {!login && <HookForm onSubmit={onSubmit} ></HookForm>}
      {login && <p>Hello grid will be here</p>}
    </div>
  );
}

export default App;
