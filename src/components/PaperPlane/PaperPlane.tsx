import React, { ReactElement, HTMLAttributes } from 'react';

const PaperPlaneIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-paper-plane`}></span>
);

export default PaperPlaneIcon;
