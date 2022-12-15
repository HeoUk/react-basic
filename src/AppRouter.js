import {BrowserRouter, Route, Routes} from "react-router-dom";
import XrayContainer from "./xray/view/XrayContainer";

function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<XrayContainer/>}/>
        {/*<Route path="/xray-detail"></Route>*/}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;