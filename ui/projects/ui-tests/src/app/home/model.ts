import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

export const model: any ={
  investmentCount: 3,
  investments: [],
};

export const options: FormlyFormOptions ={};

export const fields: FormlyFieldConfig[] = [
  {
    key: 'investmentsCount',
    type: 'input',
    defaultValue: 3,
    templateOptions: {
      type: 'number',
      label: 'Investments count',
      required: true,
      min: 1,
    },
  },
  {
    key: 'investments',
    type: 'repeat',
    fieldArray: {
      type: 'input',
      key: 'investmentName',
      templateOptions: {
        label: 'Name of Investment:',
        required: true,
      },
    },
  },
];

