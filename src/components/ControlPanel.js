// @flow

import React, { useState } from 'react';

type ControlPanelProps = {
  rootPersonId: number,
  setRootPersonId: number => void,
};

type ControlPanelStates = {
  inputValid: boolean,
};

export default function({ rootPersonId, setRootPersonId }: ControlPanelProps) {
  const [inputValid, setInputValid] = useState(true);

  const handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (Number.isInteger(value)) {
      setInputValid(true);
      setRootPersonId(Number(value));
    }

    setInputValid(false);
  };

  return (
    <div className="control-panel-ctn">
      <input
        className={`control-panel-input ${inputValid ? 'valid' : 'invalid'}`}
        type="text"
        value={rootPersonId}
        onChange={handleChange}
      />
    </div>
  );
}
