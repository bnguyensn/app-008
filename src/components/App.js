import React, { useState } from 'react';
import { getFamilyData } from '../api/getFamilyData';
import './css/App.css';

type AppStates = {
  rootPersonId: number,
};

export default function App() {
  const [rootPersonId, setRootPersonId] = useState(0);

  return <div className="App" />;
}
