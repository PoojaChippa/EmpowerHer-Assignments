import { AppProvider } from "../AppContext";
import Component2 from "./Component2";

function Component1() {
  return (
    <AppProvider>
      <div className="box">
        <h3>Component 1</h3>
        <Component2 />
      </div>
    </AppProvider>
  );
}

export default Component1;
