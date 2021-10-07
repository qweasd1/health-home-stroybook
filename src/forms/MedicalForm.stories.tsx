import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MedicalForm} from "./MedicalForm";

export default {
  title: 'Forms/MedicalForm',
  component: MedicalForm,
  argTypes: {},
} as ComponentMeta<typeof MedicalForm>;

const Template: ComponentStory<typeof MedicalForm> = (args) => <MedicalForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
