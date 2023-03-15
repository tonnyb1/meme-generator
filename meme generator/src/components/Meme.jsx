import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data?.data?.memes))
    }, [])

    // console.log("url", allMemes[3].url)

    function getMeme () {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log("urls", url)
    }
    

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    
    return (
        <main>
            <form className="form">
            <input 
                    type="text"
                    placeholder="Top text"
                    className="memeinput"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="memeinput"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="memebutton"
                    onClick={getMeme}
                    type="button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="memeimage" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        
    )
}