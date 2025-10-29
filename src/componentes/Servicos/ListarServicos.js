import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../api';

export default function ListarServicos() {
  const navigate = useNavigate();

  const [servicos, setServicos] = useState([]);

  const buscarServico = async () => {
  try {
    const resposta = await api.get("/servicos");
    setServicos(resposta.data);
  } catch (error) {
    console.log("Erro ao buscar serviços: ", error.message);
  }
  };

  useEffect(() => {
    buscarServico()
  }, []);
  
  // Função para navegar até o componente Detalhes
  const verDetalhes = (id) => {
    navigate(`/listarServico/${id}`); // Redireciona para a rota com o ID
  };

  return (
    <section id="areaAtuacao">
  <div className='listaAreaAtuacao'>
  {
    servicos.slice(-8).map(
      (item, index) => (
      <article key={index}>
        <img src={`http://localhost:5000/uploads/${item.imagem}` } width='150' alt={item.nome} />
        <h2>{item.nome}</h2>
        <p>{item.descricao}</p>
        {/* Botão para abrir a página de detalhes */}
        <button onClick={() => verDetalhes(item.id)}>
              Ver Detalhes
            </button>
      </article>
      )
    )
  }
  </div></section>
  );
}