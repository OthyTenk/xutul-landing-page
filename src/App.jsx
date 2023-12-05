
import { Route,Routes } from "react-router-dom";

import GetApp from "./pages/GetApp";
import Guide from "./pages/Guide";
import NotFound from "./pages/NotFound";
import OutStand from "./pages/OutStand";
import Public from "./pages/Public";


const App = () => (
      <Routes>
      <Route path="/" element={<Public />} />
      <Route path="/get-app" element={<GetApp />} />
      <Route path="/outstand" element={<OutStand />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )


export default App
