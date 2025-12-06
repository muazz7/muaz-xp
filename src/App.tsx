import React from 'react';
import { OSProvider, useOS } from './context/OSContext';
import BootScreen from './components/BootScreen';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop';

const OSManager: React.FC = () => {
  const { systemState } = useOS();

  return (
    <>
      {systemState === 'BOOT' && <BootScreen />}
      {systemState === 'LOGIN' && <LoginScreen />}
      {systemState === 'DESKTOP' && <Desktop />}
    </>
  );
};

const App: React.FC = () => {
  console.log('App component rendering');
  return (
    <OSProvider>
      <OSManager />
    </OSProvider>
  );
};

export default App;
