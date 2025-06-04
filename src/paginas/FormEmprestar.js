import React from "react";
import { useParams } from "react-router-dom";

export default function Emprestimo() {
  const { idlivro } = useParams();

  return (
    <div className="container mt-4">
      <h2>Formulário de Empréstimo</h2>
      <div className="mb-3">
                    <label className="form-label">
                        Nome do Livro
                    </label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
        <div className="mb-3">
                    <label className="form-label">
                        Nome da Pessoa
                    </label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
    </div>
  );
}
