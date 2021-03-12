import HookForm from "./components/HookForm"
import { Component } from "react"
import "./dist/css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App" >
        <HookForm ></HookForm>
      </div>
    );
  }
}

export default App;
