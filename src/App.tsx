import "./styles.css";

import Icon from "./Icon";

export default function App() {
  return (
    <div className="App">
      <Icon name="plus" disabled />

      <Icon name="cross" />

      <Icon name="minus" />
      <Icon name="plus" />

      <Icon name="cross" variant="filled" />

      <Icon name="minus" variant="filled" />
      <Icon name="plus" variant="filled" />

      <Icon name="plus" variant="filled" disabled />

      <Icon name="cross" variant="outline" />
      <Icon name="minus" variant="outline" />
      <Icon name="plus" variant="outline" />
      <Icon name="plus" variant="outline" disabled />
    </div>
  );
}
