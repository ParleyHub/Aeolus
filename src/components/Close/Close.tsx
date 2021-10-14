import React, { ReactElement, HTMLAttributes } from 'react';

const CloseIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-cancel`}></span>
);

export default CloseIcon;
