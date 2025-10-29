import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './index.css';
import api from '../../api';

export default function DetalheServico() {
  const navigate = useNavigate();
  const [servico, setServico] = useState({});
  const { id } = useParams(); // pega o ID da rota

  const buscarServico = async () => {

    try {
      const resposta = await api.get(`/servico/${id}`);
      setServico(resposta.data);
      console.log("estoyu qui")
    } catch (error) {
      console.log("Erro ao buscar serviços: ", error.message);
    }
    };

     useEffect(() => {
        buscarServico()
      }, [id]);
      return (
        <section id="areaAtuacao">
          <h2>Detalhes do Serviço</h2>
    
          {/* Exibe apenas se o serviço foi carregado */}
          {servico && servico.nome ? (
            <>
              <img
                src={`http://localhost:5000/uploads/${servico.imagem}`}
                alt={servico.nome}
                width="200"
              />
              <h3>{servico.nome}</h3>
              <p>{servico.descricao}</p>
    
              <button onClick={() => navigate(-1)}>Voltar</button>
            </>
          ) : (
            <p>Carregando serviço...</p>
          )}
        </section>
      );
    }