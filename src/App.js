import HookForm from "./components/HookForm"
import React, { useState } from "react"
import axios from "axios"
import Grid from "./components/Grid"

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "./dist/css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [login, setLogin] = useState(false)

  var MockAdapter = require("axios-mock-adapter");
  var mock = new MockAdapter(axios);
  mock.onPost("/login", { params: { username: "admin", password: "admin" } }).reply(200, { result: true });
  mock.onPost("/login", { params: { username: "a", password: "a" } }).reply(200, { result: false });


  const Swal = require('sweetalert2')
  const onSubmit = (data) => {

    try {
      console.log(data)
      axios.post("/login", { params: { username: data.username, password: data.password } }).catch(err => {
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
      {login && <Grid>Hello grid will be here</Grid>}
    </div>
  );
}

export default App;