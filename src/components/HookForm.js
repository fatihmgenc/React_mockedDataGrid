import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Badge } from "react-bootstrap";
import axios from "axios"
import "../dist/css/main.css";

function HookForm() {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook

    var MockAdapter = require("axios-mock-adapter");
    var mock = new MockAdapter(axios);

    mock.onPost("/login", { params: { email: "admin", password: "admin" } }).reply(200, {
        result: true
    });

    const onSubmit = (data) => {
        axios.post("/login", { params: { email: data.email, password: data.password } }).then(function (response) {
            console.log(response.data);
        }).then()

        console.log(data);
    };
    return (
        <div className="hookForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <Badge variant="warning">Email</Badge>
                    <input
                        name="email"
                        placeholder="Enter email"
                        className={"form-control"}
                        ref={register({
                            required: "Email is required"
                        })}
                    />
                </div>

                <div className="form-group">
                    <Badge variant="warning">Password</Badge>
                    <input
                        name="password"
                        placeholder="Enter password"
                        className={"form-control"}
                        ref={register({
                            required: "Password is required"
                        })}
                        type="password"
                    />
                </div>

                <Button variant="primary" type="submit" size="lg" block>Submit</Button>
            </form>
            {false && <p>Welcome</p>}
        </div>
    );
}

export default HookForm
