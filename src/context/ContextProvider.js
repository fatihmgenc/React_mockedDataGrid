import React from 'react'
import AppContext from "./AppContext"

function ContextProvider(props) {
    let title = props?.value?.userTitle
    return (
        <AppContext.Provider value={{ userTitle: title }} >
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider