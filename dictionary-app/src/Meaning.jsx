import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definition}
            <br />
            
            
            </p>
            <Examples examples={props.meaning.example} />
            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    )
}
