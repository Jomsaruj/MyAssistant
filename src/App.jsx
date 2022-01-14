import React from "react";
import Heading from "./Heading"
import Card from "./Card"
import todo from "./todo.js";

function createCard(json) {
    return (
        <Card
        key={json.id}
        name={json.name}
        img={json.img}
        date={json.date}
        message={json.message}
    />
    );
}

function App(){
    return <div>
                <Heading/>
                {contacts.map(createCard)}
           </div>
}

export default App;