import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css"

export default function Results(props) {
    if (props.results) 
        
        {return (
        <div className="Results">
            <section className="words">
            <h2>{props.results.word}</h2>
            <h3>/{props.results.phonetic}/</h3>
            </section>
            <section>
            {props.results.meanings.map(function (meaning, index) {
                return (<div key={index}>
                    <Meaning meaning={meaning} />
                    </div>)
            })}
        </section>  
        </div>
    )}
    else {return null}
    
}
