import items from "../post.json";
import ReadViewList from "./ReadViewList.js";

function App() {
  return <div>
    <ReadViewList items={items}/>
  </div>;
}

export default App;
