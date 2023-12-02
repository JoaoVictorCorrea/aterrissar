import Footer from "../components/Footer"
import Header from "../components/Header"
import React, { useState, useEffect } from "react"
import UserService from "../services/UserService";
import { useNavigate } from 'react-router-dom';


function Login(){
  const navigateTo = useNavigate();
  const [email,setEmail]=useState("");
  const [senha,setSenha]=useState("");

  function login() {
    console.warn("Email => " + email + " Senha =>" + senha);
    
    const credentials = {
      email: email,
      senha: senha
    };

    console.log("Credentials => " + JSON.stringify(credentials));

    UserService.userLogin(credentials)
      .then(result => {
        console.log("Resultado do Login => ", result);
        localStorage.setItem("user", JSON.stringify(result.data));
        navigateTo('/');
      })
      .catch(error => {
        console.error("Erro ao fazer login: ", error);
      });
  }

  return (
      <div class="login">
        <Header />
         <div class="container">
                <form class="form-signin">       
                  <h2 class="row1">Login</h2>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email:</label>
                      <input type="text" class="form-control" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} maxlength="80" required />
                    </div>
                    <div class="mb-3">
                      <label for="pass" class="form-label">Senha:</label>
                      <input type="password" class="form-control" id="pass" name="pass" onChange={(e)=>setSenha(e.target.value)} maxlength="80" required />
                    </div>                   
                    <button type="button" class="btn btn-primary m-1" onClick={login}><i class="bi bi-person-circle"></i> Enviar</button>
                    <button type="button" class="btn btn-secondary" onclick="limparFormulario();"><i class="bi bi-trash-fill"></i> Limpar</button>
                    <hr></hr>
                    <p> Ainda não possui cadastro? <a class="link-opacity-75" href="signup"> Cadastre-se agora</a></p>
            </form>
        </div>
      <Footer />
    </div>
  )
}

export default Login