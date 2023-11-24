
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),           // 145498541
            date: new Date().toDateString(),    // sat, july 23
            text: 'Dolor sunt amet enim fugiat eiusmod.',
            picture: null                       // https://asdas...
        },
        {
            id: new Date().getTime() + 1000,    // 145498541
            date: new Date().toDateString(),    // sat, july 23
            text: 'Eiusmod ipsum ad pariatur occaecat.',
            picture: null                       // https://asdas...
        },
        {
            id: new Date().getTime + 2000,    // 145498541
            date: new Date().toDateString(),    // sat, july 23
            text: 'Consequat ipsum commodo eiusmod mollit occaecat Lorem.',
            picture: null                       // https://asdas...

        }
    ]
})