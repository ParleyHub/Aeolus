import React, { ReactElement, HTMLAttributes } from 'react';

const MicrophoneIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-microphone`}></span>
);

export default MicrophoneIcon;
