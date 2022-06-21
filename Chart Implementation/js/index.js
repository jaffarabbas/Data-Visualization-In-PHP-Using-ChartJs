const ctx = document.getElementById('myChart').getContext('2d');



// const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');
const ctx5 = document.getElementById('myChart5').getContext('2d');

// console.log(data);

//bar
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['col1', 'col2', 'col3', 'col4'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//dounut
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
});

//line
// const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const myChart3 = new Chart(ctx3, {
//     type: 'line',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: 'My First Dataset',
//             data: data,
//             fill: true,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1,
//             segment: {
//                 backgroundColor: 'rgb(75, 192, 192)',
//             },
//         }]
//     },
// });

//scatter
const myChart4 = new Chart(ctx4, {
    type: 'scatter',
    data: data = {
        datasets: [{
            label: 'Scatter Dataset',
            data: [
                //Scatter grapgh data
                {
                    x: -10,
                    y: 0
                }, {
                    x: -10,
                    y: -1
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: 5
                }, {
                    x: 0.5,
                    y: 5.5
                }, {
                    x: 1,
                    y: 9
                }, {
                    x: -1,
                    y: 5
                }, {
                    x: -0.5,
                    y: 6.5
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 1,
                    y: 9
                }, {
                    x: 0.5,
                    y: 5.5
                },
            ],
            backgroundColor: 'rgb(255, 99, 132)'
        }],
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
});

//Polar Area Chart
const myChart5 = new Chart(ctx5, {
    type: 'polarArea',
    data: {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    },
    options: {}
});