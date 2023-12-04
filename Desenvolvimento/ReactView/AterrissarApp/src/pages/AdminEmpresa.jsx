import { render } from "react-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React, { Component } from "react"
import EmpresaService from "../services/EmpresaService"

class AdminEmpresa extends Component{
  constructor(props){
    super(props)

    this.state = {
        nome: '',
        cnpj: '',
    };

    this.changeNomeHandler = this.changeNomeHandler.bind(this);
    this.changeCnpjHandler = this.changeCnpjHandler.bind(this);

    this.addEmpresa = this.addEmpresa.bind(this);
  }

  addEmpresa = (e) => {
    const novoEmpresa = {
      nome: this.state.nome,
      cnpj: this.state.cnpj,
    };
    
    console.log('Empresa => ' + JSON.stringify(novoEmpresa));

    EmpresaService.createEmpresa(novoEmpresa).then(res => {
      
      this.clear();
    });
  };

  changeNomeHandler = (event) => {
    this.setState({ nome: event.target.value });
  };

  changeCnpjHandler = (event) => {
    this.setState({ cnpj: event.target.value });
  };

  clear = (event) => {
    this.setState({ nome: "" });
    this.setState({ cnpj: "" });
  }

  render() {
    return (
        <div class="login">
        <Navbar /><br /><br />
         <div class="container">
                <form class="form-signin"  id="formulario" action="#" method="post">       
                  <h2 class="row1">Adicionar Empresa</h2>
                    <div class="mb-3">
                      <label for="nome" class="form-label">Nome:</label>
                      <input type="text" class="form-control" id="nome" name="nome" maxlength="80" value={this.state.nome} onChange={this.changeNomeHandler} required />
                    </div>
                    <div class="mb-3">
                      <label for="cnpj" class="form-label">CNPJ:</label>
                      <input type="text" class="form-control" id="cnpj" name="cnpj" maxlength="80" value={this.state.cnpj} onChange={this.changeCnpjHandler} required />
                    </div>                   
                    <button type="button" class="btn btn-primary m-1 w-100" onClick={this.addEmpresa}><i class="bi bi-airplane"></i> Cadastrar</button>
                    <button type="button" class="btn btn-secondary m-1 w-100" onClick={this.clear}><i class="bi bi-trash-fill"></i> Limpar</button>
            </form>
        </div>
      <Footer />
    </div>
    )
  }
}

export default AdminEmpresa;