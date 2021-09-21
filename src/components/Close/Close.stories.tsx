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
  variant: 'default',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Black = Template.bind({});
Black.args = {
  variant: 'black',
};
