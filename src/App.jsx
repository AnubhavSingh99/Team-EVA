import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Sign from "./components/Pages/Signup";
import CropDetailsPage from "./components/Pages/CropDetailsPage";
import DashPage from "./components/Pages/DashboardPage";
import CropList2 from "./components/CropsComponents/CropList2";
import Mapping from "./components/Pages/Mapping";
import UserCart from "./components/Pages/UserCart";
import {Provider} from "react-redux"
import store from "./components/redux/store";
import Nego from "./components/Pages/negociate";

const App = () => {
  return (
    <div className="bg-[#cdec73]">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/crop/:id" element={<CropDetailsPage />} />
        <Route path="/crops" element={<CropList2 />} />
        <Route path="/dashboard" element={<DashPage />} />
        <Route path="/map" element={<Mapping />} />
        <Route path="/UserCart" element={<UserCart />} />
        <Route path="/negociate" element={<Nego />} />
      </Routes>
      </Provider>
    </div>
  );
};

export default App;
