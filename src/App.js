import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import PackingContainer from "./components/Packing/PackingContainer";

function App() {
    return (
        <div className="app">
            <div className="app_container">
                <Header/>
                <PackingContainer />
            </div>
        </div>

    );
}

export default App;
