import React, { ReactElement, HTMLAttributes } from 'react';

const VolumeOffIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-volume-off`}></span>
);

export default VolumeOffIcon;
