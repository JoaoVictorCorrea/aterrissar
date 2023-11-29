import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  const { data } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Comprar 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <form class="form-cadvoo">       
              <div class="row">
                <div class="col shadow-lg border rounded m-3 p-3">
                <div class="row mb-2 p-3">
                          
                </div>         
                <div class="row mb-2 p-3">
                          
                </div>
                </div>
                <div class='col shadow-lg border rounded m-3 p-3'>
                <div class="row mb-2 p-3">
                          
                </div>
                <div class="row mb-2 p-3">
                          
                </div>
                <hr />
                <button type="button" class="btn btn-primary m-1 w-100"><i class="bi bi-airplane"></i> Cadastrar</button>
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