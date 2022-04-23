import "./styles.css";

import Icon from "./Icon";

export default function App() {
  return (
    <section className="App">
      <h1> Icons </h1>

      <h3> Sizes and strokeWidth </h3>

      <div className="row">
        <Icon name="cross" />
        <Icon name="minus" />
        <Icon name="plus" />
        <Icon name="cross" size={24} stroke="orangered" />
        <Icon name="minus" size={24} stroke="gray" />
        <Icon name="plus" size={24} stroke="green" />
      </div>
      <h3>Fill and stroke color </h3>

      <div className="row">
        <Icon name="cross" variant="filled" stroke="white" />
        <Icon name="minus" variant="filled" fill="gray" stroke="white" />
        <Icon name="plus" variant="filled" fill="green" stroke="white" />
      </div>
      <div className="row">
        <Icon name="cross" variant="outline" stroke="orangered" />
        <Icon name="minus" variant="outline" stroke="gray" />
        <Icon name="plus" variant="outline" stroke="green" />
      </div>
      <h3>Disabled styles </h3>

      <div className="row">
        <Icon name="plus" disabled />
        <Icon name="plus" variant="filled" disabled />
        <Icon name="plus" variant="outline" disabled />
        <Icon name="plus" variant="outline" disabled disabledOpacity={1} />
      </div>
    </section>
  );
}
