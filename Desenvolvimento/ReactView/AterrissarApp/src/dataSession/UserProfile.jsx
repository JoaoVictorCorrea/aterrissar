var UserProfile = (function() {
  var id = "";
  var nome = "";
  var cpf = "";
  var dataNascimento = "";
  var telefone = "";
  var email = "";
  var senha = "";
  var admin = "";

  var getId = function(){
    return id;
  }

  var setId = function(i){
    id = i;
  }

  var getNome = function() {
    return nome;   
  };

  var setNome = function(n) {
    nome = n;     
  };

  var getCpf = function() {
    return cpf;
  };

  var setCpf = function(c) {
    cpf = c;
  };

  var getDataNascimento = function() {
    return dataNascimento;
  };

  var setDataNascimento = function(dn) {
    dataNascimento = dn;
  };

  var getTelefone = function() {
    return telefone;
  };

  var setTelefone = function(t) {
    telefone = t;
  };

  var getEmail = function() {
    return email;
  };

  var setEmail = function(e) {
    email = e;
  };

  var getSenha = function() {
    return senha;
  };

  var setSenha = function(s) {
    senha = s;
  };

  var isAdmin = function() {
    return admin;
  };

  var setAdmin = function(a) {
    admin = a;
  };

  return {
    getId: getId,
    setId: setId,
    getNome: getNome,
    setNome: setNome,
    getEmail: getEmail,
    setEmail: setEmail,
    getSenha: getSenha,
    setSenha: setSenha,
    isAdmin: isAdmin,
    setAdmin: setAdmin,
    getCpf: getCpf,
    setCpf: setCpf,
    getDataNascimento: getDataNascimento,
    setDataNascimento: setDataNascimento,
    getTelefone: getTelefone,
    setTelefone: setTelefone
  }

})();

export default UserProfile;