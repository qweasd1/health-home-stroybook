import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ReportPage} from "./ReportPage";

export default {
  title: 'Screens/FundingAndReimbursementSourcePage',
  component: ReportPage,
  argTypes: {},
} as ComponentMeta<typeof ReportPage>;

const Template: ComponentStory<typeof ReportPage> = (args) => <ReportPage {...args} />;

export const UPMC = Template.bind({});

UPMC.args = {
  orginalReport:'http://192.168.1.12:8080/upmc_report_origin.pdf',
  generatedReport:'http://192.168.1.12:8080/upmc_report_finished.pdf',
  reportName:"UPMC HealthPlan"
};

export const FED = Template.bind({})
FED.args = {
  orginalReport:'http://192.168.1.12:8080/federal_report_origin.pdf',
  generatedReport:'http://192.168.1.12:8080/federal_report_finished.pdf',
  reportName:"FUNCTIONAL ELIGIBILITY DETERMINATION"
}

