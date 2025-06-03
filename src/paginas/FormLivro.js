import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormLivro() {
  const navegacao = useNavigate();
  const { id } = useParams();

  
  const [titulo, setTitulo] = useState("");
  const [edicao, setEdicao] = useState("");
  const [paginas, setPaginas] = useState(0);
  const [publicacao, setPublicacao] = useState(0);
  const [foto, setFoto] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [resumo, setResumo] = useState("");
  const [ativo, setAtivo] = useState(true);
  const [condicaofisica, setCondicaofisica] = useState("");
  const [emprestado, setEmprestado] = useState(false);
  const [ideditora, setIdeditora] = useState(0);
  const [idcategoria, setIdcategoria] = useState(0);

  const voltar = () => {
    navegacao("/listalivro");
  };

  const selecionar = async () => {
    const { data } = await axios.get(`http://localhost:4000/livro/${id}`);

    setTitulo(data.titulo);
    setEdicao(data.edicao);
    setPaginas(data.paginas);
    setPublicacao(data.publicacao);
    setFoto(data.foto);
    setLocalizacao(data.localizacao);
    setResumo(data.resumo);
    setAtivo(data.ativo);
    setCondicaofisica(data.condicaofisica);
    setEmprestado(data.emprestado);
    setIdeditora(data.ideditora);
    setIdcategoria(data.idcategoria);
  };

  const alterar = async () => {
      let body = {
      "titulo": titulo,
      "edicao": edicao,
      "paginas": paginas,
      "publicacao": publicacao,
      "foto": foto,
      "localizacao": localizacao,
      "resumo": resumo,
      "ativo": ativo,
      "condicaofisica": condicaofisica,
      "emprestado": emprestado,
      "ideditora": ideditora,
      "idcategoria": idcategoria,
      };

      const response = await axios.put(`http://localhost:4000/livro/${id}`, body);
      voltar();
    }

  const inserir = async () => {
    let body = {
      "titulo": titulo,
      "edicao": edicao,
      "paginas": paginas,
      "publicacao": publicacao,
      "foto": foto,
      "localizacao": localizacao,
      "resumo": resumo,
      "ativo": ativo,
      "condicaofisica": condicaofisica,
      "emprestado": emprestado,
      "ideditora": ideditora,
      "idcategoria": idcategoria,
    };

    await axios.post(`http://localhost:4000/livro`, body);
    voltar();
  };

  const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

  const excluir = async () => {
    await axios.delete(`http://localhost:4000/livro/${id}`);
    voltar();
  };

  useEffect(() => {
    if (id) {
      selecionar();
    }
  }, [id]);

  return (
    <>
      <TituloCadastro id={id} titulo="titulo" />

      <form>
        {id && (
          <div className="mb-3">
            <label className="form-label">Código</label>
            <input type="text" className="form-control" value={id} readOnly />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Titulo do livro</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edição</label>
          <input
            type="text"
            className="form-control"
            value={edicao}
            onChange={(evento) => setEdicao(evento.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Paginas</label>
          <input
            type="number"
            className="form-control"
            value={paginas}
            onChange={(evento) => setPaginas(evento.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Publicacão</label>
          <input
            type="number"
            className="form-control"
            value={publicacao}
            onChange={(evento) => setPublicacao(evento.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Foto</label>
          <input
            type="text"
            className="form-control"
            value={foto}
            onChange={(evento) => setFoto(evento.target.value)}
          />
          {foto && <img src={foto} className="img-thumbnail" style={{ width: "250px" }} />}
        </div>

        <div className="mb-3">
          <label className="form-label">Localização</label>
          <input
            type="text"
            className="form-control"
            value={localizacao}
            onChange={(evento) => setLocalizacao(evento.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Resumo</label>
          <textarea
            className="form-control"
            value={resumo}
            onChange={(evento) => setResumo(evento.target.value)}
            rows={10}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ativo</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={ativo}
              onChange={(evento) => setAtivo(evento.target.checked)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Condição Fisíca</label>
          <input
            type="text"
            className="form-control"
            value={condicaofisica}
            onChange={(evento) => setCondicaofisica(evento.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Emprestado</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={emprestado}
              onChange={(evento) => setEmprestado(evento.target.checked)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Id Editora</label>
          <input
            type="number"
            className="form-control"
            value={ideditora}
            onChange={(evento) => setIdeditora(evento.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Id Categoria</label>
          <input
            type="number"
            className="form-control"
            value={idcategoria}
            onChange={(evento) => setIdcategoria(evento.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary"
                    onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button"
                    className="btn btn-secondary"
                    onClick={() => voltar()}>
                    Cancelar
                </button>
                {id && (
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => excluir()}>
                        Excluir
                    </button>
                )}
      </form>
    </>
  );
}
