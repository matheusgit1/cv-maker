import React from 'react';
import Sidenav from './components/Sidenav';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { UserContextProvider } from './context/userContext'
//pages
import UserData from './pages/UserData'
import Models from './pages/Model'
import WorkExperiences from './pages/WorkExperiences'
import TrainingAndQualification from './pages/TrainingAndQualification'
import Skills from './pages/Skills'
import AdditionalInformation from './pages/AdditionalInformation'
import FinalModel from './pages/FinalModal/FinalModel'

import routes from './routes.json'

function App() {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Switch>
          <Sidenav>
            <Route exact path={routes.models.path} component={Models} />
            <Route exact path={routes.personalData.path} component={UserData} />
            <Route exact path={routes.workExperiences.path} component={WorkExperiences} />{/**okkk */}
            <Route exact path={routes.TrainingAndQualification.path} component={TrainingAndQualification} />
            <Route exact path={routes.Skills.path} component={Skills} />
            <Route exact path={routes.AdditionalInformation.path} component={AdditionalInformation} />
            <Route exact path={routes.ViewModel.path} component={FinalModel} />
          </Sidenav>
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
