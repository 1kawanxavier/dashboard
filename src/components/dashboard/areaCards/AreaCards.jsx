import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Vendas de Hoje",
          value: "R$20.4K",
          text: "Vendemos 123 itens.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Lucro de Hoje",
          value: "R$8.2K",
          text: "Disponível para pagamento",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Aguardando pagamento",
          value: "R$18.2K",
        }}
      />
    </section>
  );
};

export default AreaCards;
