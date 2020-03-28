import React from "react"

import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke 
                question="What do you call the security outside of a Samsung Store?"
                punchline="Guardians of the Galaxy."
            />
            <Joke 
                question="Which is the coldest letter in alphabet?"
                punchline="B because it is in the middle of AC."
            />
            <Joke 
                question="Why was the stadium so cold?"
                pubnchline="Because there were a ton of fans."
            />
            <Joke 
                question="What do you call a bee that was born is the United States?"
                punchline="A USB."
            />
            <Joke 
                question="What are the strongest days of the week?"
                punchline="Saturday and Sunday the rest are week days."
            />
        </div>
    )
}

export default App