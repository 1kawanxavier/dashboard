import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Produtos",
  "ID do Pedido",
  "Data",
  "Nome do Cliente",
  "Status",
  "Valor",
  "Ação",
];

// Obtendo a data de hoje
const today = new Date();
const formattedDate = `${today.getDate()} de ${
  today.toLocaleString("default", { month: "long" })
} de ${today.getFullYear()}`;

const TABLE_DATA = [
  {
    id: 100,
    name: "iPhone 13 Pro",
    order_id: 11232,
    date: formattedDate,
    customer: "Kawan",
    status: "entregue",
    amount: 7999.99,
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11232,
    date: formattedDate,
    customer: "Kawan",
    status: "pendente",
    amount: 10999.99,
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11232,
    date: formattedDate,
    customer: "Kawan",
    status: "cancelado",
    amount: 1999.99,
  },
  {
    id: 103,
    name: "Microsoft Book",
    order_id: 11232,
    date: formattedDate,
    customer: "Arthur",
    status: "entregue",
    amount: 2399.99,
  },
  {
    id: 104,
    name: "Apple Pen",
    order_id: 11232,
    date: formattedDate,
    customer: "Arthur",
    status: "entregue",
    amount: 349.99,
  },
  {
    id: 105,
    name: "Airpods",
    order_id: 11232,
    date: formattedDate,
    customer: "Arthur",
    status: "entregue",
    amount: 199.99,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Últimos Pedidos</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>R${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
