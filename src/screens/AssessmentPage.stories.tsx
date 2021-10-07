import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AssessmentPage} from "./AssessmentPage";
import {BioForm} from "../forms/BioForm";
import {ParticipantFunctionalGoalForm} from "../forms/ParticipantFunctionalGoalForm";
import {MedicalForm} from "../forms/MedicalForm";
import {StairForm} from "../forms/StairForm";


export default {
  title: 'Screens/AssessmentPage',
  component: AssessmentPage,
  argTypes: {},
} as ComponentMeta<typeof AssessmentPage>;

const Template: ComponentStory<typeof AssessmentPage> = (args) => <AssessmentPage {...args} />;

export const Demographic = Template.bind({});

Demographic.args = {
  title:"Demographic",
  children:<BioForm/>
};

export const ParticipantsFunctionalGoals = Template.bind({})
ParticipantsFunctionalGoals.args = {
    title:"Participants Functional Goals",
  children:<ParticipantFunctionalGoalForm />
}

export const FunctionalAssessment = Template.bind({})
FunctionalAssessment.args = {
  title:"Functional Assessment",
  children:<MedicalForm />
}


export const Environment = Template.bind({})
Environment.args = {
  title:"Environment",
  children:<StairForm />
}


