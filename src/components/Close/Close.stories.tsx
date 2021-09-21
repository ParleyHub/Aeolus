import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as CloseIcon } from './Close';

export default {
  title: 'Components/Close',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>;

const Template: ComponentStory<typeof CloseIcon> = (args) => (
  <CloseIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'info',
};
