import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormControl, FormGroup } from 'react-bootstrap';
import Moment from 'moment/moment';
import ReservaService from '../services/ReservaService';

// Objeto Passagem
class Passagem {
  constructor(assento, qtdBagagem, precoTotal, nomePassageiro, cpfPassageiro, tipoPassagem) {
    this.assento = assento;
    this.qtdBagagem = qtdBagagem;
    this.precoTotal = precoTotal;
    this.nomePassageiro = nomePassageiro;
    this.cpfPassageiro = cpfPassageiro;
    this.tipoPassagem = tipoPassagem;
  }
}

class Reserva {
  constructor(total, viagem, user, passagens){
    this.total = total;
    this.viagem = {
      id : viagem
    };
    this.user = {
      id : user
    };
    this.passagens = passagens;
  }
}

function MyVerticallyCenteredModal(props) {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const { data } = props;

  const [assento, setAssento] = useState('');
  const [nomePassageiro, setNomePassageiro] = useState('');
  const [cpfPassageiro, setCpfPassageiro] = useState('');
  const [tipoPassagem, setTipoPassagem] = useState('ECONOMICA');
  const [qtdBagagem, setqtdBagagem] = useState(0);
  const [precoTotal, setPrecoTotal] = useState(data.precoPassagem);

  const [total, setTotal] = useState(0);
  const [texto, setTexto] = useState("Não há passagens na lista");
  
  const [Passagens, setPassagens] = useState([]); // Lista de passagens
  let valorPassagem = data.precoPassagem;


  const comprarPassagem = () => {
    setTotal(total + precoTotal);

    const passagem = new Passagem(
      assento,
      qtdBagagem,
      precoTotal,
      nomePassageiro,
      cpfPassageiro,
      tipoPassagem
    );

    console.log('Passagem comprada => ', passagem);

    setPassagens([...Passagens, passagem]);
  };

  const finalizarReseva = () => {
    const reserva = new Reserva(
      total,
      data.id,
      user.id,
      Passagens
    );

    console.log("Reserva => ", reserva);
    ReservaService.createReserva(reserva);

    setPassagens([])
    setTotal(0);
    setTexto("Reserva efetuada com sucesso!")
  }

  const paraMin = () => {
    setNomePassageiro(user.nome);
    setCpfPassageiro(user.cpf);
  }

  const atualizarValor = (e) => {
    setTipoPassagem(e.target.value);
    if(e.target.value == "ECONOMICA"){
      setPrecoTotal(data.precoPassagem * (1 + (qtdBagagem / 10)));
    }else if (e.target.value == "EXECUTIVA"){
      setPrecoTotal((data.precoPassagem * (1 + (qtdBagagem / 10))) * 1.5);
    }else if (e.target.value == "PRIMEIRA_CLASSE"){
      setPrecoTotal((data.precoPassagem * (1 + (qtdBagagem / 10))) * 2);
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Comprar Passagem
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundImage: 'url(' + data.imgUrl + ')', backgroundPosition: 'cneter', backgroundRepeat: 'false', backgroundSize: 'cover' }}>
          <form class="form-cadvoo shadow-lg border rounded m-3 " >       
              <div class="row ">
                <div class='col'>
                <div class="row p-3">
                  <h5 class="card-title mb-1">{data.destino.pais}</h5>
                  <h2 class="card-title mb-2">{data.destino.cidade}</h2>
                  <h3 class="text-primary"> Passagens a partir de R${data.precoPassagem} </h3>              
                </div>
                <div class="row ml-2 p-3 ">
                  <h5><i class="bi bi-calendar2-week"></i> Voe de {Moment(data.dataSaida).format('DD/MM/YY hh:mm')} a {Moment(data.dataChegada).format('DD/MM/YY hh:mm')} </h5>
                </div>
                <div class="bg-light rounded">
                  <div class="row m-1 p-3 ">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={paraMin} />
                      <label class="form-check-label" for="flexSwitchCheckChecked">Comprar para mim</label>
                    </div>
                  </div>
                  <div class="row m-2 mb-3">
                    <label for="nome" class="form-label">Nome do Passageiro:</label>
                    <input type="text" class="form-control" id="nome" name="nome"  maxlength="80" value={nomePassageiro} onChange={(e) => setNomePassageiro(e.target.value)} required/>
                  </div>
                  <div class="row m-2 mb-3">
                    <label for="cpf" class="form-label">CPF:</label>
                    <input type="text" class="form-control" id="cpf" name="cpf"  maxlength="80" value={cpfPassageiro} onChange={(e) => setCpfPassageiro(e.target.value)} required/>
                  </div>
                  <div class="row m-2 mb-3">
                    <label for="tipo" class="form-label">Tipo da Passagem:</label>
                    <select class="form-control" value={tipoPassagem} onChange={atualizarValor} > 
                        <option value="ECONOMICA">Economica</option>
                        <option value="EXECUTIVA">Executiva</option>
                        <option value="PRIMEIRA_CLASSE">Primeira Classe</option>
                    </select>
                  </div>
                  <div class="row m-2 pb-3">
                    <label for="numBag" class="form-label">Quantidade de Bagagens:</label>
                    <input type="number" class="form-control" id="numBag" name="numBag"  min="0" max="3" value={qtdBagagem} onChange={(e) => setqtdBagagem(e.target.value)} required/>
                  </div>
                  <div class="row m-2 pb-3">
                    <label for="numBag" class="form-label">Assento:</label>
                    <input type="text" class="form-control" id="assento" name="assento" value={assento} onChange={(e) => setAssento(e.target.value)} required/>
                  </div>
                  <div class="row m-2 pb-3">
                      <div class="d-flex flex-row-reverse">
                        <h5 class="p-2">Valor da Passagem: R${precoTotal}</h5>
                      </div>
                    <button type="button" class="btn btn-primary m-1 w-100" onClick={comprarPassagem} ><i class="bi bi-arrow-right"></i> Comprar Passagem </button>
                    <button type="button" class="btn btn-secondary m-1 w-100"><i class="bi bi-trash-fill"></i> Limpar</button>
                  </div>
                </div>
                <hr />
                <h3>Detalhes da Reserva</h3>
                { Passagens ? Passagens.map((key) => {
                  return <div class="card shadow-lg mb-2">
                  <div class="card-body">
                    <h6>{key.tipoPassagem}: {key.assento}</h6> 
                    <p>Nome do Passageiro: {key.nomePassageiro}</p>
                    <div class="d-flex flex-row-reverse">
                      <h5 class="p-2">{key.qtdBagagem} Bagagens</h5>
                    </div>
                    <div class="d-flex flex-row-reverse">
                      <h6 class="p-2">Valor Total da Passagem: R${key.precoTotal}</h6>
                    </div>
                  </div>
                </div>
                }) : 
                    <h2>{texto}</h2>
                }
                <div class="row m-2 mb-3">
                  <div class="d-flex flex-row-reverse">
                    <h4 class="p-2">Valor Total da Reserva: R${total}</h4>
                  </div>
                </div>
                <button type="button" class="btn btn-primary m-1 w-100" onClick={finalizarReseva} ><i class="bi bi-arrow-right"></i> Finalizar reserva </button>
              </div>                      
            </div>
          </form>
      </Modal.Body>
    </Modal>
  );
}

function ModalCompra({data}) {
  console.log("Data => " + JSON.stringify(data))
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button type="button" class="btn btn-primary w-100" onClick={() => setModalShow(true)}>
      <i class="bi bi-airplane"></i> Viajar
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
    </>
  );
}

export default ModalCompra;