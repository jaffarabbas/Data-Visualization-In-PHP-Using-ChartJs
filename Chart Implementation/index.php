<?php

include("dbconnection.php");

$sql = "select price from data where price between 100 and 500 order by price";
$sql2 = "select price from data where price between 501 and 1000 order by price";
$sql3 = "select price from data where price between 1001 and 1500 order by price";
$sql4 = "select price from data where price between 1501 and 7000 order by price";
$sql5 = "select price from data";
$result = mysqli_query($connection, $sql);
$result2 = mysqli_query($connection, $sql2);
$result3 = mysqli_query($connection, $sql3);
$result4 = mysqli_query($connection, $sql4);
$result5 = mysqli_query($connection, $sql5);
$data = [];
// while ($row = mysqli_fetch_assoc($result)) {
//     $data['col1'][] = $row['price'];
// }
// while ($row = mysqli_fetch_assoc($result2)) {
//     $data['col2'][] = $row['price'];
// }
// while ($row = mysqli_fetch_assoc($result3)) {
//     $data['col3'][] = $row['price'];
// }
// while ($row = mysqli_fetch_assoc($result4)) {
//     $data['col4'][] = $row['price'];
// }
while ($row = mysqli_fetch_assoc($result5)) {
    $data[] = $row['price'];
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .chartMain {
            padding: 50px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .chart {
            width: 500px;
            padding: 20px 10px;
        }
    </style>
</head>

<body>
    <div class="chartMain">
        <div class="chart">
            <h1>Bar Graph</h1>
            <canvas id="myChart"></canvas>
        </div>
        <div class="chart">
            <h1>Doughnut and Pie Charts</h1>
            <canvas id="myChart2"></canvas>
        </div>
        <div class="chart">
            <h1>Line Graph</h1>
            <canvas id="myChart3"></canvas>
        </div>
        <div class="chart">
            <h1>Scatter Graph</h1>
            <canvas id="myChart4"></canvas>
        </div>
        <div class="chart">
            <h1>Polar Area Chart</h1>
            <canvas id="myChart5"></canvas>
        </div>
    </div>

    <script src="js/chart.js"></script>
    <script src="js/index.js"></script>
</body>
<script type="text/javascript">
    //covert php arry to javascript arrya
    var data = <?php echo json_encode($data); ?>;

    const ctx3 = document.getElementById('myChart3').getContext('2d');
    // const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const labels = Samples.utils.months({ count: 12 });
    const myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                data: data,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                segment: {
                    backgroundColor: 'rgb(75, 192, 192)',
                },
            }]
        },
    });
</script>

</html>