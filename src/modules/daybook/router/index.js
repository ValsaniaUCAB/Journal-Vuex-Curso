

export default {
    name: 'daybook',
    component: () => import(/* webpackChunvkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunvkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunvkName: "daybook-no-entry" */ '@/modules/daybook/views/EntryView'),

        }

    ]
}