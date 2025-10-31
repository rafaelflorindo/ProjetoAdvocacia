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
    } catch (error) {
      console.log("Erro ao buscar serviços: ", error.message);
    }
  };

  useEffect(() => {
    buscarServico()
  }, [id]);

  return (
    <section className="areaAtuacao">
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
          <p><strong>Descrição:</strong> {servico.descricao}</p>

          {servico.preco && (
            <p><strong>Preço:</strong> R$ {Number(servico.preco).toFixed(2)}</p>
          )}

          {servico.prazo && (
            <p><strong>Prazo:</strong> {servico.prazo}</p>
          )}

          {servico.tipoAtendimento && (
            <p><strong>Atendimento:</strong> {servico.tipoAtendimento}</p>
          )}

          {servico.endereco && (
            <p><strong>Endereço:</strong> {servico.endereco}</p>
          )}

          <p>
            <strong>Status:</strong>{" "}
            {servico.ativo ? "Disponível ✅" : "Indisponível ❌"}
          </p>

          <button onClick={() => navigate(-1)}>Voltar</button>
        </>
      ) : (
        <p>Carregando serviço...</p>
      )}
    </section>
  );
}
