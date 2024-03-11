export const getUsersList = (name:string) => {
    const list =  [
        {
            id:'1',
            name: 'Erik Machaca',
            photo: '',
            principal: false,
            division: {
              code: '04',
              name: 'Soluciones Medicas',
            },
            am: {
              code: '',
              name: 'Todas',
            },
          },
          {
            id:'5',
            name: 'Raquel Flores',
            photo: '',
            principal: true,
            division: {
              code: '04',
              name: 'Soluciones Medicas',
            },
            am: {
              code: '',
              name: 'Todas',
            },
          },
          {
            id:'3',
            name: 'Kevin Torrez',
            photo: '',
            principal: false,
            division: {
              code: '03',
              name: 'Automotriz',
            },
            am: {
              code: '',
              name: 'Todas',
            },
          },
          {
            id:'2',
            name: 'Sergio Machaca',
            photo: '',
            principal: false,
            division: {
              code: '08',
              name: 'Software & Servicios',
            },
            am: {
              code: '',
              name: 'Todas',
            },
          },

          {
            id:'5',
            name: 'Jhonny Torrez',
            photo: '',
            principal: true,
            division: {
              code: '04',
              name: 'Soluciones Medicas',
            },
            am: {
              code: '',
              name: 'Todas',
            },
          },
          
    ];

    return list.filter(el => el.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
}