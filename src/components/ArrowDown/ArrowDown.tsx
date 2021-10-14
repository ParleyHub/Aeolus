import React, { ReactElement, HTMLAttributes } from 'react';

const ArrowDownIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-arrow-down`}></span>
);

export default ArrowDownIcon;
