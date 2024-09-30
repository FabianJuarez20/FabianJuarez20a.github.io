import React from "react";

function Zoo(Animals,Habitats) {
    return (
        <div>
            <h1>informacion del Zoologico</h1>
            <p><strong>Animals:</strong>{Animals}</p>
            <p><strong>Especie:</strong>{Habitats}</p>
        </div>
    );
}

export default Zoo;