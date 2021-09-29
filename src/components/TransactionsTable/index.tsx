import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de APP.</td>
            <td className="deposit">R$12.000,00</td>
            <td>Development</td>
            <td>29/09/2021</td>
          </tr>
          <tr>
            <td>Locação da Casa</td>
            <td className="withdraw">-R$1.240,00</td>
            <td>Moradia</td>
            <td>10/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}