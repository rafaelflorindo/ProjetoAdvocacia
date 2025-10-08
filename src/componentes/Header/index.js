import './estiloHeader.css'
import logo from './logo.svg';

function Header(){
    return (
        <header className='topo'>
            <img src={logo} className='logo' />
            <nav className='menu'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#areaAtuacao'>Áreas de Atuação</a></li>
                    <li><a href='#contato'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;