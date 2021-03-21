import React from 'react';
import Home from './Home';
import Speakers from './Speakers';
import Math from './MathPage';


export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  if (pageName === 'Math') return <Math />;
  return <div>Not Found</div>;
};

const configValue={
  showSignMeUp:true,
  showSpeakersSpeakingDays:true
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
