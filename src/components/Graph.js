// @flow

import React from 'react';
import type { PersonData } from '../api/sample_data/TypeDefs';
import PersonBlock from './PersonBlock';

type GraphProps = {
  data: PersonData[],
};

export default function Graph({ data }: GraphProps) {
  return (
    <div className="graph-ctn">
      {data.map(personData => (
        <PersonBlock personData={personData} />
      ))}
    </div>
  );
}
