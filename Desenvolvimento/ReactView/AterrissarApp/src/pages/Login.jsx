import Footer from "../components/Footer"
import Header from "../components/Header"

function Login(){

  return (
      <div class="login">
        <Header />
         <div class="container">
                <form class="form-signin"  id="formulario" action="#" method="post">       
                  <h2 class="row1">Login</h2>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email:</label>
                      <input type="text" class="form-control" id="email" name="email" maxlength="80" required />
                    </div>
                    <div class="mb-3">
                      <label for="pass" class="form-label">Senha:</label>
                      <input type="password" class="form-control" id="pass" name="pass" maxlength="80" required />
                    </div>                   
                    <button type="button" class="btn btn-primary m-1" onclick="validarFormulario();"><i class="bi bi-person-circle"></i> Enviar</button>
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