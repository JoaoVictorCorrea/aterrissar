// Card.js
import React, { useState } from 'react';
import Moment from 'moment/moment';
import ModalCompra from './ModalCompra';

const Card = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div >
      <div class="card rounded shadow-lg">
        <img src={data.imgUrl} class="card-img-top" alt="" style={{"height" : "200px"}}/>
        <div class="card-body">
            <p class="card-text"> Voe de {Moment(data.dataSaida).format('DD/MM/YY')} a {Moment(data.dataChegada).format('DD/MM/YY')}</p>
            <hr />
            <h5 class="card-title">De: {data.partida.pais}</h5>
            <h2 class="card-title">{data.partida.cidade}</h2>
            <h5 class="card-title">Para: {data.destino.pais}</h5>
            <h2 class="card-title">{data.destino.cidade}</h2>
            <p class="card-text">Descrição do destino.</p>
            <p class="card-text"> A partir de<h5>R${data.precoPassagem}</h5></p>
            <ModalCompra data={data} />
        </div>
      </div>
    </div>
  );
};

export default Card;
