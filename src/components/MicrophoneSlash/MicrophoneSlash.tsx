import React, { ReactElement, HTMLAttributes } from 'react';

const MicrophoneSlashIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-microphone-slash`}></span>
);

export default MicrophoneSlashIcon;
