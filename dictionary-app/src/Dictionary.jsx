import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.jsx";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);
    
    function handleResponse(response) {
        setResult(response.data);
    }

    function search(event) {
        event.preventDefault();
        
        let apiKey = `b3b36of7f40tfb2fc5ea76728725e80c`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <section className="lookup">
                <h4>What word do you want to look up?</h4>
                <form onSubmit={search}>
                   <input type="search" autoFocus={true} onChange={handleKeywordChange} />
                </form>
            </section>
            <Results results={result}/>
        </div>
    )
}