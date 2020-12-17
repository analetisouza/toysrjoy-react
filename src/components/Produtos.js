import './styles/App.css';
import './styles/Produtos.css';

function Produtos() {
  return (
    <div className="Produtos">
      <section id="produtos">
        <h1>Produtos</h1>

        <div className="produto">
            <div className="imagem">
                <img src="/images/minion-2.png" 
                     alt="Minion rindo mas de desespero" />
                <span className="preco">
                    <h3>45</h3>
                    <p>reais</p>
                    <img src="/images/estrela-amarela.svg" alt="" />
                </span>
            </div>
            <div className="descricao">
                <h2>Minion Rindo Mas De Desespero</h2>
                <p>
                    Esse boneco é a companhia perfeita para os momentos que você precisa finalizar alguma tarefa mas 
                    decide procrastinar até o último segundo. <br/> Com ele você pode relaxar, ouvir uma música e fingir
                    que nada está acontecendo sem sentir (tanta) culpa.
                </p>
            </div>
        </div>

        <div className="produto">
            <div className="imagem">
                <img src="/images/minion-3.png" 
                     alt="Minion esperando ela responder" />
                <span className="preco">
                    <h3>56</h3>
                    <p>reais</p>
                    <img src="/images/estrela-amarela.svg" alt="" />
                </span>
            </div>
            <div className="descricao">
                <h2>Minion Esperando Ela Responder</h2>
                <p>
                    Não pequeno gafanhoto, ela não vai te responder. Se ela visualizou sua mensagem faz uma semana e 
                    ainda não te respondeu, não quer dizer que ela está ocupada, mas sim que simplesmente não tem 
                    interesse. <br/> Mas nem tudo está perdido! Adquirindo esse boneco você ganha uma companhia para 
                    chorar pensando nela enquanto ouve os Barões da Pisadinha.
                </p>
            </div>
        </div>

        <div className="produto">
            <div className="imagem">
                <img src="/images/minion-4.png" 
                     alt="Minion dentento em Bangu 8" />
                <span className="preco">
                    <h3>71</h3>
                    <p>reais</p>
                    <img src="/images/estrela-amarela.svg" alt="" />
                </span>
            </div>
            <div className="descricao">
                <h2>Minion Detento Em Bangu 8</h2>
                <p>
                    Independente se você já gastou o seu réu primário ou não, esse boneco é uma grande homenagem aos 
                    governadores do Rio de Janeiro, que se esforçam em perpetuar a tradição de se envolverem em 
                    escândalos de corrupção e serem presos a cada mandato. <br/> E se você possuir um diploma 
                    universitário, tem direito a cela especial e 10% de desconto!
            </p>
            </div>
        </div>

    </section>
    </div>
  );
}

export default Produtos;