import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StairForm} from "./StairForm";

export default {
  title: 'forms/StairForm',
  component: StairForm,
  argTypes: {},
} as ComponentMeta<typeof StairForm>;

const Template: ComponentStory<typeof StairForm> = (args) => <StairForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
