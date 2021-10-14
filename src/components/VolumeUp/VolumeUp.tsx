import React, { ReactElement, HTMLAttributes } from 'react';

const VolumeUpIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-volume-up`}></span>
);

export default VolumeUpIcon;
