import React, { ReactElement, HTMLAttributes } from 'react';

const CancelOutlineIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-cancel-o`}></span>
);

export default CancelOutlineIcon;
