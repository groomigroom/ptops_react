import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}){
    const [name, setName] = useState("Groom");
    const msg = age > 19 ? '멍멍이' : '야옹이';

    return (
        <div>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name} />
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