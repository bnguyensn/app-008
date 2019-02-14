import React from 'react';

export default function PersonBlock({ personData }) {
  const displayName = `${personData.firstName} ${personData.lastName}`;

  return (
    <div className="person-block-ctn">
      <img className="person-block-photo" src={personData.imgPath} />
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