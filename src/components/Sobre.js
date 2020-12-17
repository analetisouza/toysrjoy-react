import './App.css';

function Sobre() {
  return (
    <div className="Sobre">
      <section id="sobre">
        <p>
            A Toys R Joy é uma empresa de brinquedos fundada em 2001 com o intuito de fornecer produtos 
            que apresentassem qualidade e durabilidade, mas que acima de tudo trouxessem alegria, diversão 
            e encantamento para todas as pessoas que acreditassem na nossa proposta e desejassem fazer parte 
            do nosso mundo de fantasia. E é essa magia que nós buscamos entregar em cada criação nossa, mesmo 
            19 anos depois. A nossa mais nova coleção traz os minions como enfoque, personagens cheios de 
            inteligência, energia e também muito parceiros. Embarque conosco nessa aventura, porque aqui a 
            brincadeira não tem idade.
        </p>

        <img src="/images/minion-1.png" alt="Dois bonecos minions brincando com tinta amarela" />
        <div id="diferenciais">
            <h2>Nossos <br/> Diferenciais</h2>
            <ul>
                <li>★ Bonecos fiéis aos personagens em cada detalhe</li>
                <li>★ Tinta hipoalergênica de alta durabilidade</li>
                <li>★ Resistente contra quebra e arranhões em caso de quedas e acidentes</li>
                <li>★ Seguro para uso de crianças pequenas</li>
            </ul>
        </div>
    </section>
    </div>
  );
}

export default Sobre;