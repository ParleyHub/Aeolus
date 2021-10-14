import React, { ReactElement, HTMLAttributes } from 'react';

const BellIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-bell`}></span>
);

export default BellIcon;
