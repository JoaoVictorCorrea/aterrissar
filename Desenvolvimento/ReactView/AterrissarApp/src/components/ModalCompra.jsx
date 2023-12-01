import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormControl, FormGroup } from 'react-bootstrap';
import Moment from 'moment/moment';

// Objeto Passagem
class Passagem {
  constructor(id, assento, qtdeBagagem, precoTotal, nomePassageiro, cpfPassageiro, tipoPassagem) {
    this.id = id;
    this.assento = assento;
    this.qtdeBagagem = qtdeBagagem;
    this.precoTotal = precoTotal;
    this.nomePassageiro = nomePassageiro;
    this.cpfPassageiro = cpfPassageiro;
    this.tipoPassagem = tipoPassagem;
  }
}

function MyVerticallyCenteredModal(props) {
  const { data } = props;
  const [id, setId] = useState('');
  const [assento, setAssento] = useState('');
  const [nomePassageiro, setNomePassageiro] = useState('');
  const [cpfPassageiro, setCpfPassageiro] = useState('');
  const [tipoPassagem, setTipoPassagem] = useState('Economica');
  const [qtdeBagagem, setQtdeBagagem] = useState(0);
  const [Passagens, setPassagens] = useState([]); // Lista de passagens
  let precoTotal = data.precoPassagem;
  let valorTotal = data.precoPassagem;

  const comprarPassagem = () => {
    const passagem = new Passagem(
      id, 
      assento,
      precoTotal,
      qtdeBagagem,
      nomePassageiro,
      cpfPassageiro,
      tipoPassagem
    );

    console.log('Passagem comprada => ', passagem);

    setPassagens([...Passagens, passagem]);

    console.log('Pasagens => ', JSON.stringify(Passagens));
  };

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
                  <h3 class="text-primary"> Passagens a partir de R${data.precoPassagem.toFixed(2)} </h3>              
                </div>
                <div class="row ml-2 p-3 ">
                  <h5><i class="bi bi-calendar2-week"></i> Voe de {Moment(data.dataSaida).format('DD/MM/YY')} a {Moment(data.dataChegada).format('DD/MM/YY')} </h5>
                </div>
                <div class="bg-light rounded">
                  <div class="row m-1 p-3 ">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
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
                    <select class="form-control" > 
                        <option>Economica</option>
                        <option>Executiva</option>
                        <option>Primeira Classe</option>
                    </select>
                  </div>
                  <div class="row m-2 mb-3 pb-3">
                    <label for="numBag" class="form-label">Quantidade de Bagagens:</label>
                    <input type="number" class="form-control" id="numBag" name="numBag"  min="0" max="3" value={qtdeBagagem} onChange={(e) => setQtdeBagagem(e.target.value)} required/>
                  </div>
                </div>
                <hr />
                <div class="row m-2 mb-3">
                  <div class="d-flex flex-row-reverse">
                    <h4 class="p-2">Valor Total da Passagem: R${valorTotal.toFixed(2)}</h4>
                  </div>
                </div>
                <button type="button" class="btn btn-primary m-1 w-100" onClick={comprarPassagem} ><i class="bi bi-arrow-right"></i> Comprar Passagem </button>
                <button type="button" class="btn btn-secondary m-1 w-100"><i class="bi bi-trash-fill"></i> Limpar</button>
              </div>                      
            </div>
          </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
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