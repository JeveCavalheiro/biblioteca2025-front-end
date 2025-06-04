import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [livros, setLivros] = useState([]);

  const home = async () => {
      const { data } = await axios.get("http://localhost:4000/livro");

      setLivros(data);
      
    };

  useEffect(() => {
    home();
  }, []);

  const navegacao = useNavigate();

  const Emprestar = () => {
    navegacao("/emprestar"); 
  };



  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-lg btn-primary flex-fill mx-1">
          Categorias
         </button>
        <button type="button" className="btn btn-primary btn-lg">
            Categorias
        </button>
        <button type="button" className="btn btn-primary btn-lg">
            Categorias
        </button>
        <button type="button" className="btn btn-primary btn-lg">
            Categorias
        </button>
      </div>
      <h2>Livros</h2>
      <div className="row">
        {livros.map((d, i) => (
          <div key={d.idlivro} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={d.foto}
                className="card-img-top"
                alt={`Capa do livro ${d.titulo}`}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{d.titulo}</h5>
                <p className="card-text flex-grow-1">
                  Publicacao: {d.publicacao} <br />
                  Páginas: {d.paginas} <br />
                  Editora: {d.ideditora} <br />
                  Edição: {d.edicao} <br />
                </p>
                <button className="btn btn-lg btn-primary flex-fill mx-1" onClick={Emprestar}>
                Emprestar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
