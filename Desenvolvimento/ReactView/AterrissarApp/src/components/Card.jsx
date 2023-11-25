function Card(){
  let imgUrl = "https://www.familiasemfronteiras.com.br/wp-content/uploads/2016/07/Cebu.jpg";

  return (
    <div>
      <div class="m8">
        <div class="card">
            <img src={imgUrl} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Destino</h5>
              <p class="card-text">Descrição do destino.</p>
              <a href="#!" class="btn btn-primary">Acessar</a>
            </div>
          </div>
      </div>
    </div>
  )

}

export default Card;