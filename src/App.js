import { Fragment, useContext } from "react";
import AppGatos from "./Components/AppGatos";
import Home from "./Components/Home";
import { DataContext } from "./Context/DataContext";

function App() {

  const { Presupuesto } = useContext(DataContext)

  return (
    <Fragment>
      {Presupuesto ? <AppGatos /> : <Home />}
    </Fragment>
  );
  
}

export default App;
