import React from "react";
import { useForm } from 'react-hook-form';
import { Button, Badge } from "react-bootstrap";
import "../dist/css/main.css";
// burada Vestin inputunu kullan,, context api ile de onsubmit propunu taşı . 
function HookForm(props) {
    const onSubmit = props.onSubmit;
    const { register, handleSubmit, errors } = useForm(); // initialize the hook

    return (
        <div className="hookForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <Badge variant="warning">username</Badge>
                    <input
                        name="username"
                        label="Username"
                        className={"form-control"}
                        ref={register({
                            required: "username is required"
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
        </div>
    );
}

export default HookForm