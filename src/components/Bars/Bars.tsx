import React, { ReactElement, HTMLAttributes } from 'react';

const BarsIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-bars`}></span>
);

export default BarsIcon;
