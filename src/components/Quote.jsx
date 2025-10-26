import React from "react";

const Quote = ({ texto, autor }) => {
    return (
        <div className="grid-x grid-padding-x align-center align-middle bordes margen">
            <div className="cell medium-9 bordes">
                <blockquote>    
                    <h2>{texto}</h2>
                    <cite className="text-right">{autor}</cite>
                </blockquote>
            </div>
        </div>
    );
};

export default Quote;
