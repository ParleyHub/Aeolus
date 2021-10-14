import React, { ReactElement, HTMLAttributes } from 'react';

const ArrowUpIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-arrow-up`}></span>
);

export default ArrowUpIcon;
