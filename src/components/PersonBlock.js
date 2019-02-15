// @flow

import React from 'react';
import type { PersonData } from '../api/sample_data/TypeDefs';

type PersonBlockProps = {
  personData: PersonData,
};

export default function PersonBlock({ personData }: PersonBlockProps) {
  const displayName = `${personData.firstName} ${personData.lastName}`;

  return (
    <div className="person-block-ctn">
      <img
        className="person-block-photo"
        src={personData.imgPath}
        alt={displayName}
      />
      <div className="person-block-info">
        <div className="person-block-name">{displayName}</div>
        <div className="person-block-title">{personData.title}</div>
        <div className="person-block-lifespan">{`${personData.yob} - ${
          personData.yod
        }`}</div>
        {personData.yoc !== null && (
          <div className="person-block-reign">
            {`${personData.yoc} - ${personData.yoe}`}
          </div>
        )}
      </div>
    </div>
  );
}
