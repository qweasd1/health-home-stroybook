import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {HomePage} from "./HomePage";

export default {
  title: 'Screens/HomePage',
  component: HomePage,
  argTypes: {},
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
