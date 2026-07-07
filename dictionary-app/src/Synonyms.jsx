import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
    if (props.synonyms) { 
        return (
            <div className="Synonyms">
                <strong>Synonyms: </strong>
                {props.synonyms.map(function (synonym, index) {
                    return (
                        <span key={index}>
                            <ul>
                                <li>{synonym} </li>
                            </ul></span>)
                })}
        </div>
    );
} else {return null;}
   
}