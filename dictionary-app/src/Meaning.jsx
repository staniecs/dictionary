import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Dictionary.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <section>
            <h2>{props.meaning.partOfSpeech}</h2>
            <p>{props.meaning.definition}
                </p>
            <Examples examples={props.meaning.example} />
            <Synonyms synonyms={props.meaning.synonyms} />
            </section>
        </div>
    )
}
