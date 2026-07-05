import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.jsx";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function handleResponse(response) {
        console.log(response.data);
       
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}...`);

        let apiKey = `b3b36of7f40tfb2fc5ea76728725e80c`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            </form>
            <Results />
        </div>
    )
}