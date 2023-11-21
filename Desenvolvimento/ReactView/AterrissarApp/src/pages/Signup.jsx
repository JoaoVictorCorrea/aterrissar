import Footer from "../components/Footer"
import Header from "../components/Header"

function Signup(){

  return (
      <div class="login">
        <Header />
        <div class="container">
                <form class="form-signup"  id="formulario" action="#" method="post">       
                  <h2 class="row1">Sign Up</h2>
                  <div class="row">
                    <div class="col">
                      <div class="row mb-3 m-1">
                        <label for="nome" class="form-label">Nome:</label>
                        <input type="text" class="form-control" id="nome" name="nome" maxlength="80" required/>
                      </div>
                      <div class="row mb-3 m-1">
                          <label for="cpf" class="form-label">CPF:</label>
                          <input type="text" class="form-control" id="cpf" name="cpf" maxlength="80" required/>
                      </div>
                      <div class="row mb-3 m-1">
                        <label for="dataNasc" class="form-label">Data de Nascimento:</label>
                        <input type="date" class="form-control mb-3" id="dataNasc" name="dataNasc"/>
                      </div>
                      <div class="row m-1">
                          <label for="telefone" class="form-label">Telefone:</label>
                          <input type="text" class="form-control mb-3" id="telefone" name="telefone" maxlength="10" placeholder="xxxxxxxxxxx"/>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row m-1">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control mb-2" id="email" name="email"/>
                      </div>
                      <div class="row m-1">
                        <label for="pass" class="form-label">Senha:</label>
                        <input type="password" class="form-control mb-3" id="pass" name="pass"/>
                      </div>
                      <div class="row m-1">
                        <label for="passConfirm" class="form-label">Confirmar Senha:</label>
                        <input type="password" class="form-control mb-5" id="passConfirm" name="passConfirm"/>
                      </div>
                      <button type="button" class="btn btn-primary m-1" onclick="validarFormulario();"><i class="bi bi-person-add"></i> Cadastrar</button>
                      <button type="button" class="btn btn-secondary" onclick="limparFormulario();"><i class="bi bi-trash-fill"></i> Limpar</button>
                    </div>
                  </div>
            </form>
        </div>
      <Footer />
    </div>
  )
}

export default Signup