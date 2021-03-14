import React from 'react'
import { Alert } from "react-bootstrap"
import AppContext from "../context/AppContext";
function GreetingHeader() {
    return (
        <AppContext.Consumer>
            {(value) => (
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you <p style={{ color: 'red', display: 'inline', position: 'relative' }}> {value.userTitle}</p> </Alert.Heading>
                </Alert>
            )}
        </AppContext.Consumer>
    )
}

export default GreetingHeader
