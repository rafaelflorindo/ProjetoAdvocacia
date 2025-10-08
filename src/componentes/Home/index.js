import './estiloHome.css';

import fundoHome from './fundoHome.jpg';
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </section>
            <section id="areaAtuacao">
                <h1>Página Área de Atuação</h1>
                <div className='listaAreaAtuacao'>
                    <article>
                        <img src={fundoHome} width={300}/>
                        <h2>Atuação 1</h2>
                        <p>Descrição da atuação 1 Descrição da atuação 1 Descrição da atuação 1 Descrição da atuação 1</p>
                    </article>
                    <article>
                        <img src={fundoHome} width={300}/>
                        <h2>Atuação 2</h2>
                        <p>Descrição da atuação 2</p>
                    </article>
                    <article>
                        <img src={fundoHome} width={300}/>
                        <h2>Atuação 3</h2>
                        <p>Descrição da atuação 3</p>
                    </article>
                    <article>
                        <img src={fundoHome} width={300}/>
                        <h2>Atuação 4</h2>
                        <p>Descrição da atuação 4</p>
                    </article>
                </div>
            </section>
            <section id="contato">
                <h1>Página Contato</h1>
            </section>
        </main>
    )
}
export default Home;