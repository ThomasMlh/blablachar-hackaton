import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import ListDrivers from "./components/ListDrivers";
import Drivers from "./components/Drivers";
import Form from "./components/Form";
import ChariotPage from "./components/ChariotPage";


import { getProfiles } from "./api/apiCall";

import { Switch, Route } from "react-router-dom";
import Safety from "./components/Safety";


function App() {
  const [profiles, setProfiles] = useState([]);

  const getData = async () => {
    const myData = await getProfiles();
    setProfiles(myData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />

      <ListDrivers profile={profiles} />


      <Switch>
        <Route path="/post" component={Form} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/chariots" component={ChariotPage} />
        <Route path="/safety" component={Safety} />
        <Route exact path="/" component={FrontPage} />
      </Switch>


      <Footer />
    </div>
  );
}

export default App;
