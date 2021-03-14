import HookForm from "./components/HookForm"
import { useState } from "react"
import axios from "axios"
import Grid from "./components/Grid"
import ContextProvider from "./context/ContextProvider";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "./dist/css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [login, setLogin] = useState(false)
  const [userTitle, setUserTitle] = useState("UnKnown")

  var MockAdapter = require("axios-mock-adapter");
  var mock = new MockAdapter(axios);
  mock.onPost("/login", { params: { username: "admin", password: "admin" } }).reply(200, { result: true });
  mock.onPost("/login", { params: { username: "a", password: "a" } }).reply(200, { result: false });
  const Swal = require('sweetalert2')
  const onSubmit = (data) => {

    try {

      axios.post("/login", { params: { username: data.username, password: data.password } }).catch(err => {
        showSwal(false);
        throw Error;
      }).then(function (response) {
        showSwal(true);
        setLogin(true);
        setUserTitle(data.username)
      })
    } catch (err) {
      console.log("Ex catch")
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
    <ContextProvider value={{ userTitle: userTitle }} >
      <div className="App" >
        {!login && <HookForm onSubmit={onSubmit} ></HookForm>}
        {login && <Grid>Hello grid will be here</Grid>}
      </div>
    </ContextProvider>
  );
}

export default App;