import React, { ReactElement, HTMLAttributes } from 'react';

const PhoneIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-phone`}></span>
);

export default PhoneIcon;
