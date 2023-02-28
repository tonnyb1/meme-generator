import React from "react";
import memesData from '../assets/data/memesData'

export default function Meme() {

    const [imageUrl, setImageUrl] = React.useState("")
    const memesArray = memesData?.data?.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const imageUrli = memesData.data.memes[randomNum].url
    console.log("mimin", randomNum)

    console.log("urlis",imageUrli)
    
    function getImage () {
        setImageUrl(imageUrli)
    }
    
    return (
        <main>
            <form className="form">
                <input type="text" className="memeinput" placeholder="Top text"/>
                <input type="text" className="memeinput" placeholder="Bottom text"/>
                <button className="memebutton" onClick={getImage}>Get a new meme image  🖼</button>
            </form>
            <img src= {imageUrli} alt="meme" className="memeimage"/>
        </main>
        
    )
}