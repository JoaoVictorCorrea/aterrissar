// Card.js
import React from 'react';

const Card = ({ data }) => {
  return (
    <div>
      <div class="m8">
        <div class="card rounded shadow ">
        <img src={data.imgUrl} class="card-img-top" alt="" style={{"height" : "200px"}}/>
          <div class="card-body">
              <h5 class="card-title">{data.destino.cidade}</h5>
              <p class="card-text">Descrição do destino.</p>
              <a href="#!" class="btn btn-primary">Acessar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
