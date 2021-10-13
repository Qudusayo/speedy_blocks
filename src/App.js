import { Switch, Route } from "react-router-dom"

import Homepage from "./Routes/Homepage"
import Blockpage from "./Routes/Blockpage"

function App() {
  return (
    <Switch>
      <Route component={Homepage} path="/" exact />
      <Route component={Blockpage} path="/blocks/:crypto" exact />
    </Switch>
  );
}

export default App;
