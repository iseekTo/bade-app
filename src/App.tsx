import React from 'react';
import { useHistory } from 'react-router'
import './App.css';


function App() {
    const history = useHistory()

    const onJumpClick = () => {
        history.push(`/fruit`)
    }


    return (
        <>
            <h3 onClick={onJumpClick}>fruit</h3>
        </>
    )
}

export default App;
