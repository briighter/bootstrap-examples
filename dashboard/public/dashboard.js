/* globals Chart:false, feather:false */

(() => {
  "use strict";

  feather.replace({ "aria-hidden": "true" });

  // Graphs
  const ctx = document.getElementById("myChart");
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "CY2008Q2",
        "CY2008Q3",
        "CY2009Q1",
        "CY2009Q2",
        "CY2009Q3",
        "CY2009Q4",
        "CY2010Q1",
        "CY2010Q2",
        "CY2010Q3",
        "CY2010Q4",
        "CY2011Q1",
        "CY2011Q2",
        "CY2011Q3",
        "CY2011Q4",
        "CY2012Q1",
        "CY2012Q2",
        "CY2012Q3",
        "CY2012Q4",
        "CY2013Q1",
        "CY2013Q2",
        "CY2013Q3",
        "CY2013Q4",
        "CY2014Q1",
        "CY2014Q2",
        "CY2014Q3",
        "CY2014Q4",
        "CY2015Q1",
        "CY2015Q2",
        "CY2015Q3",
        "CY2015Q4",
        "CY2016Q1",
        "CY2016Q2",
        "CY2016Q3",
        "CY2016Q4",
        "CY2017Q1",
        "CY2017Q2",
        "CY2017Q3",
        "CY2017Q4",
        "CY2018Q1",
        "CY2018Q2",
        "CY2018Q3",
        "CY2018Q4",
        "CY2019Q1",
        "CY2019Q2",
        "CY2019Q3",
        "CY2019Q4",
        "CY2020Q1",
        "CY2020Q2",
        "CY2020Q3",
        "CY2021Q1",
        "CY2021Q2",
        "CY2021Q3",
        "CY2022Q1",
        "CY2022Q2",
      ],
      datasets: [
        {
          data: [
            2.04, 1.62, 0.63, 1.62, 2.31, 1.65, 2.2, 2.23, 2.85, 3.39, 2.92,
            3.26, 3.28, 3.1, 3.19, 3.13, 3.72, 4.02, 3.69, 4.27, 4.3, 4.98,
            4.47, 4.79, 5.46, 4.86, 4.92, 4.92, 5.08, 5.19, 3.97, 4.79, 5.33,
            5.21, 5.27, 5.26, 5.83, 14.23, 6.75, 6.67, 7.59, 5.84, 6.65, 6.46,
            7.21, 8.38, 5.19, 7.9, 8.94, 7.86, 9.04, 11.05, 9.46, 7.12,
          ],
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
})();
