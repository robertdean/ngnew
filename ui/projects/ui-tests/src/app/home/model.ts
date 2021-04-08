import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';


export const model: any = {
  investmentCount: 3,
  investments: [],
};
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  export function filterStates(name: string) {
    return states.filter(state =>
      state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

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
              type: 'autocomplete',
              key: 'stateName',
              templateOptions: {
                label: 'Autocomplete',
                placeholder: 'Placeholder',
                filter: (term:string) => of(term ? filterStates(term) : states.slice()),
              },},
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


