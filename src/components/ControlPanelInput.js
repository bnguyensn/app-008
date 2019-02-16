import React from 'react';

type ControlPanelInputProps = {
  inputValid: boolean,
  handleChange: (e: SyntheticKeyboardEvent<HTMLInputElement>) => void,
  value: string,
};

export default function ControlPanelInput({
  inputValid,
  handleChange,
  value,
}: ControlPanelInputProps) {
  return (
    <input
      className={"control-panel-input"}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}
