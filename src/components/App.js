import React, { useState } from 'react';
import { getFamilyData } from '../api/getFamilyData';
import './css/App.css';
import ControlPanel from './ControlPanel';

type AppStates = {
  rootPersonId: number,
};

export default function App() {
  const [rootPersonId, setRootPersonId] = useState(0);

  return (
    <div className="App">
      <ControlPanel
        rootPersonId={rootPersonId}
        setRootPersonId={setRootPersonId}
      />
    </div>
  );
}
