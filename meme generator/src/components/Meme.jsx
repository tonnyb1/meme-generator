import React from "react";

export default function Meme() {
    return (
        <main>
            <form className="form">
            <input type="text" className="memeinput" placeholder="Top text"/>
            <input type="text" className="memeinput" placeholder="Bottom text"/>
            <button className="memebutton">Get a new meme image  🖼</button>
        </form>
        </main>
        
    )
}