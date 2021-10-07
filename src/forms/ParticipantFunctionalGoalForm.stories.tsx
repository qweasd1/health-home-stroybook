import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ParticipantFunctionalGoalForm} from "./ParticipantFunctionalGoalForm";

export default {
  title: 'Forms/ParticipantFunctionalGoalForm',
  component: ParticipantFunctionalGoalForm,
  argTypes: {},
} as ComponentMeta<typeof ParticipantFunctionalGoalForm>;

const Template: ComponentStory<typeof ParticipantFunctionalGoalForm> = (args) =>
  <ParticipantFunctionalGoalForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
