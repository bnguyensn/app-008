// @flow

import React, { useState } from 'react';
import ControlPanelInput from './ControlPanelInput';

type ControlPanelProps = {
  rootPersonId: number,
  setRootPersonId: number => void,
};

type ControlPanelStates = {
  inputValid: boolean,
};

export default function ControlPanel({
  rootPersonId,
  setRootPersonId,
}: ControlPanelProps) {
  const [inputValid, setInputValid] = useState(true);

  const handleRootPersonIdChange = (
    e: SyntheticInputEvent<HTMLInputElement>
  ) => {
    const value = e.currentTarget.value;

    // enforce rootPersonId to be an integer
    if (Number.isInteger(value)) {
      setInputValid(true);
      setRootPersonId(Number(value));
    }

    setInputValid(false);
  };

  return (
    <div className="control-panel-ctn">
      <ControlPanelInput
        inputValid={inputValid}
        handleChange={handleRootPersonIdChange}
        value={rootPersonId}
      />
    </div>
  );
}
