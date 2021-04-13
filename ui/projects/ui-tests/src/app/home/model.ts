import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { of } from "rxjs/internal/observable/of";

export const model: any = {
    investmentsCount: 3,
    investments: [],
};
export const options: FormlyFormOptions = {};
export interface State {
    id: number;
    flag: string;
    name: string;
    population: string;
}

const states: State[] = [
    {
        id: 1,
        name: 'Arkansas',
        population: '2.978M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
        id: 2,
        name: 'California',
        population: '39.14M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
        id: 3,
        name: 'Florida',
        population: '20.27M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
        id: 4,
        name: 'Texas',
        population: '27.47M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
];

export function filterStates(name: string) {
    return states.filter(state =>
        state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
}
export function filterStateObjects(searchTerm: string){
  let searchFor = '';
  if(typeof searchTerm === 'string'){
    searchFor= searchTerm;
  }
  return states.filter((state:State)=>state.name.toLowerCase().indexOf(searchFor.toLowerCase())===0);
}
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
        hooks: {

        }
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
                        fxLayoutAlign: "space-between center"
                    },
                    fieldGroup: [
                        {
                            type: 'autocomplete',
                            key: 'investmentName',

                            templateOptions: {
                                required: true,
                                label: 'State',
                                displayProp: 'name',
                                valueProp: 'id',
                                placeholder: 'Select a State',
                                filter: (term: string) => of(term ? filterStateObjects(term) : states.slice()),
                            },
                        },
                        {
                            key: 'investmentDate',
                            type: 'datepicker',
                            defaultValue: new Date(),
                            templateOptions: {
                                label: 'Datepicker',
                                placeholder: 'Placeholder',
                                description: 'Description',
                                required: true,
                            },
                        },

                        {
                            type: 'input',
                            key: 'stockIdentifier',
                            templateOptions: {
                                label: 'Stock Identifier:',
                            },
                        },
                        {
                            key: 'active',
                            type: 'toggle',
                            templateOptions: {
                                label: 'Active',
                                description: 'Active',
                                required: true,
                            },
                        },

                    ]
                },

            ],
        },
    },
];
