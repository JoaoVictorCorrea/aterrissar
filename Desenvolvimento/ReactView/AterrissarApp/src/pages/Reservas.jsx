import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import Moment from 'moment/moment';
import React, { useState, useEffect, Component } from "react"
import { useNavigate } from 'react-router-dom';
import ReservaService from "../services/ReservaService";

const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;

class Reservas extends Component{

  componentDidMount(){
    ReservaService.getReservaById(user.id).then((res) => {
      this.setState({ reservas: res.data });
      console.log('Reservas => ' + JSON.stringify(this.state.reservas));
    });
  }

  constructor(props){
    super(props)

    this.state = {
        reservas: []
    };
  }

  render() {
    return (
        <div class="login">
          <Navbar />
          <div class="container"><br /><br />
                  <form class="form-reservas ">       
                    <h2 class="row1">Minhas Reservas</h2>
                    <div class="row">
                    { this.state.reservas ? this.state.reservas.map((reserva) => {
                    return <div class="card shadow-lg mb-2 bg-light"> 
                     <div class="card-body">
                      <h4>Reserva para {reserva.viagem.destino.cidade}, {reserva.viagem.destino.pais}</h4>
                      <h5><i class="bi bi-calendar2-week"></i> Voe de {Moment(reserva.viagem.dataSaida).format('DD/MM/YY hh:mm')} a {Moment(reserva.viagem.dataChegada).format('DD/MM/YY hh:mm')} </h5>
                      {reserva.passagens.map((passagem, index) => (
                        <div key={index} class="card mb-3 shadow-lg p-2">
                          <div class="row">
                            <h5>Passageiro: {passagem.nomePassageiro}</h5>
                            <h6>CPF: {passagem.cpfPassageiro}</h6>
                            <p>Assento: {passagem.assento} {passagem.tipoPassagem}</p>
                            <div class="d-flex flex-row-reverse">
                              <h6 class="p-2">Valor da Passagem: R${passagem.precoTotal}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div class="d-flex flex-row-reverse">
                      <h5 class="p-2">Valor Total da Reserva: R${reserva.total}</h5>
                    </div>
                  </div>
                </div>
                }) : 
                    <h2>Não há reservas a serem mostradas</h2>
                }
                    </div>
              </form>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Reservas;