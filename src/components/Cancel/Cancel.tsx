import React, { ReactElement, HTMLAttributes } from 'react';

const CancelIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-cancel`}></span>
);

export default CancelIcon;
