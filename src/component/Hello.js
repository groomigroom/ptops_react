import { useState } from "react";

export default function Hello(props){
    console.log(props);
    const [name, setName] = useState("Groom");
    const [age, setAge] =useState(props.age);

    return (
        <div>
            <h2 id="name">{name}({props.age})</h2>
            <button
                onClick={() => {
                    setName(name === "Groom" ? "mungmung" : "Groom");
                }}
            >
                change
            </button>
        </div>
    );
}