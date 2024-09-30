import React from "react";

function Habitats(props) {
    return (
        <div>
            <p><strong>HABITAT:</strong>{ props.habitat}</p>
            <p><strong>CONTINENTE:</strong>{ props.continente}</p>
            <p><strong>CLIMA:</strong>{ props.clima}</p>
        </div>
    );
}

export default Habitats;