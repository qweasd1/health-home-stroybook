import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {RecommendationPage} from "./RecommendationPage";


export default {
  title: 'Screens/RecommendationPage',
  component: RecommendationPage,
  argTypes: {},
} as ComponentMeta<typeof RecommendationPage>;

const Template: ComponentStory<typeof RecommendationPage> = (args) => <RecommendationPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
