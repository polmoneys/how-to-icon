import "./styles.css";

import Icon from "./Icon";

export default function App() {
  return (
    <section className="App">
      <h1> Icons </h1>

      <h3> Sizes and strokeWidth </h3>

      <div className="row">
        <Icon name="check" />
        <Icon name="cross" />
        <Icon name="minus" />
        <Icon name="plus" />
      </div>
      <div className="row">
        <Icon name="check" size={24} stroke="var(--accent-2)" />
        <Icon name="cross" size={24} stroke="var(--accent-3)" />
        <Icon name="minus" size={24} stroke="var(--gray-4)" />
        <Icon name="plus" size={24} stroke="var(--accent-1)" />
      </div>
      <div className="row">
        <Icon name="check" strokeWidth={4} stroke="var(--accent-2)" />
        <Icon name="cross" strokeWidth={4} stroke="var(--accent-3)" />
        <Icon name="minus" strokeWidth={4} stroke="var(--gray-4)" />
        <Icon name="plus" strokeWidth={4} stroke="var(--accent-1)" />
      </div>
      <h3>Fill and stroke color </h3>

      <div className="row">
        <Icon
          name="check"
          variant="filled"
          fill="var(--accent-2)"
          stroke="var(--gray-8)"
        />
        <Icon
          name="cross"
          variant="filled"
          fill="var(--accent-3)"
          stroke="var(--gray-8)"
        />
        <Icon
          name="minus"
          variant="filled"
          fill="var(--gray-4)"
          stroke="var(--gray-8)"
        />
        <Icon
          name="plus"
          variant="filled"
          fill="var(--accent-1)"
          stroke="var(--gray-8)"
        />
      </div>
      <div className="row">
        <Icon name="check" variant="outline" stroke="var(--accent-2)" />

        <Icon name="cross" variant="outline" stroke="var(--accent-3)" />
        <Icon name="minus" variant="outline" stroke="var(--gray-4)" />
        <Icon name="plus" variant="outline" stroke="var(--accent-1)" />
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
