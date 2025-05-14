import TituloLista from "../componentes/TituloLista";

export default function ListaCategoria(){
    return (
        <>
            <TituloLista titulo ="Categorias" 
            descricao="Gerencia aqui as categorias dos livros da bilbioteca"
            rota="/categoria"/>


            <>
  {/* Tabela */}
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry the Bird</td>
        <td />
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</>

        </>
    );
};