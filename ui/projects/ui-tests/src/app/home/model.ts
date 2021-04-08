import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { defaultRoutes } from '../../../../shared/src/lib/components/index';
export const model: any = {
  investmentCount: 3,
  investments: [],
};

const states: string[] = [];

export const options: FormlyFormOptions = {};

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
    hooks: {},
  },
  {
    key: 'investments',
    type: 'repeat',
    templateOptions: {
      addText: 'Add another investment',
    },
    fieldArray: {
      fieldGroup: [
        {
          type: 'flex-layout',
          templateOptions: {
            fxLayout: 'row',
            fxLayoutAlign: 'space-between center',
          },
          fieldGroup: [
            {
              type: 'input',
              key: 'something',
              templateOptions: {
                label: 'test',
              },
            },
            {
              type: 'datepicker',
              key: 'someDate',
              defaultValue: new Date(),
              templateOptions: {
                label: 'Date',
                placeholder: 'Placeholder',
                description: 'Description',
              },
            },
            {
              key: 'active',
              type: 'toggle',
              defaultValue: false,
              templateOptions: {
                label: 'Is Active',
                required: true,
              },
            },
          ],
        },
      ],
    },
  },
];

function filterStates(term: String): any {
  throw new Error('Function not implemented.');
}
