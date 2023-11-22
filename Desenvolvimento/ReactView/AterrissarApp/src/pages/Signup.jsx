import { render } from "react-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import React, { Component } from "react"
import UserService from "../services/UserService"

class Signup extends Component{
  constructor(props){
    super(props)

    this.state = {
        nome: '',
        cpf: '',
        dataNasc: '',
        telefone: '',
        email:'',
        senha:'',
    }
    this.changeNomeHandler = this.changeNomeHandler.bind(this);
    this.changeCpfHandler = this.changeCpfHandler.bind(this);
    this.changeDataNascHandler = this.changeDataNascHandler.bind(this);
    this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeSenhaHandler = this.changeSenhaHandler.bind(this);

    this.addUser = this.addUser.bind(this);
  }

  addUser = (e) => {
    e.preventDefault();

    let user = {nome: this.state.nome, cpf: this.state.cpf, dataNasc: this.state.dataNasc, telefone: this.state.telefone, email: this.state.email, senha: this.state.senha}
    console.log('user => ' + JSON.stringify(user));

    UserService.createUser(user).then(res => {
      this.props.history.push('/signup');
    });
  }

  changeNomeHandler= (event) => {
    this.setState({nome: event.target.value});
  }

  changeCpfHandler= (event) => {
    this.setState({cpf: event.target.value});
  }

  changeDataNascHandler= (event) => {
    this.setState({dataNasc: event.target.value});
  }

  changeTelefoneHandler= (event) => {
    this.setState({telefone: event.target.value});
  }

  changeEmailHandler= (event) => {
    this.setState({email: event.target.value});
  }

  changeSenhaHandler= (event) => {
    this.setState({senha: event.target.value});
  }

  cancel(){
    
  }

  render() {
    return (
        <div class="login">
          <Header />
          <div class="container">
                  <form class="form-signup">       
                    <h2 class="row1">Sign Up</h2>
                    <div class="row">
                      <div class="col">
                        <div class="row mb-3 m-1">
                          <label for="nome" class="form-label">Nome:</label>
                          <input type="text" class="form-control" id="nome" name="nome" value={this.state.nome} onChange={this.changeNomeHandler} maxlength="80" required/>
                        </div>
                        <div class="row mb-3 m-1">
                            <label for="cpf" class="form-label">CPF:</label>
                            <input type="text" class="form-control" id="cpf" name="cpf" value={this.state.cpf} onChange={this.changeCpfHandler} maxlength="80" required/>
                        </div>
                        <div class="row mb-3 m-1">
                          <label for="dataNasc" class="form-label">Data de Nascimento:</label>
                          <input type="date" class="form-control mb-3" id="dataNasc"  name="dataNasc" value={this.state.dataNasc} onChange={this.changeDataNascHandler}/>
                        </div>
                        <div class="row m-1">
                            <label for="telefone" class="form-label">Telefone:</label>
                            <input type="text" class="form-control mb-3" id="telefone" name="telefone" value={this.state.telefone} onChange={this.changeTelefoneHandler} maxlength="10" placeholder="xxxxxxxxxxx"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="row m-1">
                          <label for="email" class="form-label">Email:</label>
                          <input type="email" class="form-control mb-2" id="email" name="email" value={this.state.email} onChange={this.changeEmailHandler}/>
                        </div>
                        <div class="row m-1">
                          <label for="pass" class="form-label">Senha:</label>
                          <input type="password" class="form-control mb-3" id="pass" name="pass" value={this.state.senha} onChange={this.changeSenhaHandler}/>
                        </div>
                        <div class="row m-1">
                          <label for="passConfirm" class="form-label">Confirmar Senha:</label>
                          <input type="password" class="form-control mb-5" id="passConfirm" name="passConfirm"/>
                        </div>
                        <button type="button" class="btn btn-primary m-1" onClick={this.addUser}><i class="bi bi-person-add"></i> Cadastrar</button>
                        <button type="button" class="btn btn-secondary" onClick={this.changeCpfHandler.bind(this)}><i class="bi bi-trash-fill"></i> Limpar</button>
                      </div>
                    </div>
              </form>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Signup