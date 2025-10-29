
import ListarServicos from '../Servicos/ListarServicos'


import './estiloHome.css';

import fundoHome from './man-5806012_1920.jpg';

function Home() {
    

    return (
        <main className='container'>
            <section id="home"
                style={
                    {
                        backgroundImage: `url(${fundoHome})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }
                }>
                <p>Seja para sua empresa ou para questões específicas pessoais, nós daremos a direção que você precisa para alcançar a melhor solução possível.</p>
            </section>
            <section id="areaAtuacao">
                <h1>Página Área de Atuação</h1>
                <ListarServicos />
            </section>
            <section id="contato">
                <h1>Página Contato</h1>
            </section>
        </main>
    )
}
export default Home;