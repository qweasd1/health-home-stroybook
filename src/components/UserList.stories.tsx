import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UserList} from "./UserList";

export default {
  title: 'Components/UserList',
  component: UserList,
  argTypes: {},
} as ComponentMeta<typeof UserList>;

const Template: ComponentStory<typeof UserList> = (args) => <UserList {...args} />;



export const Primary = Template.bind({});

Primary.args = {
  users:[
    {
      name:"Tony Wang",
      address:"10234 Some Street, Apt 8"
    },
    {
      name:"Andi Saptono",
      address:"16234 Another Street, Apt 9"
    },
    {
      name:"Wayan Pulantara",
      address:"20234 Some Street, Apt 7"
    }
  ]
};



