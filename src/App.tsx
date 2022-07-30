import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [value, setValue] = useState(() => {
            let valueAsString = localStorage.getItem('counterValue')
            if (valueAsString) {
                let newValue = JSON.parse(valueAsString)
                return newValue
            } else {
                return 0
            }
        }
    )


    const incHandler = () => {
        setValue(value + 1)
    }


    useEffect(() => {
        setToLocalStorageHandler()
    }, [value])

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))

    }
    /*const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }*/

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*  <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}

        </div>
    );
}

export default App;
