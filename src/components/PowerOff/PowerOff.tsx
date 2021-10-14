import React, { ReactElement, HTMLAttributes } from 'react';

const PowerOffIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-power-off`}></span>
);

export default PowerOffIcon;
