import { Link } from 'react-router-dom';
import './estiloHeader.css'
import logo from './logo.svg';

function Header(){
    return (
        <header className='topo'>
            <img src={logo} className='logo' />
            <nav className='menu'>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><a href='#areaAtuacao'>Áreas de Atuação</a></li>
                    <li><a href='#contato'>Contato</a></li>
                    <li><Link to='/cadastrarServico'>Cadastrar Servico</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;