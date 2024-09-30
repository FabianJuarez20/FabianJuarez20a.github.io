import React from "react";

function Animals(props) {

    return (
        <div>
            <p><strong>NOMBRE:</strong>{props.nombre}</p>
            <p><strong>ESPECIE:</strong>{props.especie}</p>
            <p><strong>EDAD:</strong>{props.edad}</p>
        </div>
    );
}

export default Animals;