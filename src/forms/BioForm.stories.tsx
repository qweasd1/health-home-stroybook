import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BioForm} from "./BioForm";

export default {
  title: 'Forms/BioForm',
  component: BioForm,
  argTypes: {},
} as ComponentMeta<typeof BioForm>;

const Template: ComponentStory<typeof BioForm> = (args) => <BioForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
