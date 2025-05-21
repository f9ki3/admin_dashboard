// Area Chart
var areaOptions = {
  chart: {
    type: "area",
    height: 200,
    toolbar: { show: false },
  },
  series: [
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 85, 77],
    },
  ],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  colors: ["#28a745"],
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" },
  fill: {
    type: "gradient",
    gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 },
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#areaChart"),
  areaOptions
);
areaChart.render();

// Bar Chart
var barOptions = {
  chart: {
    type: "bar",
    height: 200,
    toolbar: { show: false },
  },
  series: [
    {
      name: "Transactions",
      data: [10, 15, 9, 18, 25, 13, 19],
    },
  ],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  colors: ["#007bff"],
  plotOptions: {
    bar: {
      columnWidth: "45%",
      borderRadius: 4,
    },
  },
  dataLabels: { enabled: false },
};

var barChart = new ApexCharts(document.querySelector("#barChart"), barOptions);
barChart.render();

// Room Status Donut Chart
var roomStatusOptions = {
  chart: {
    type: "donut",
    height: 250,
  },
  series: [45, 30, 10], // Available, Occupied, Maintenance
  labels: ["Available", "Occupied", "Maintenance"],
  colors: ["#28a745", "#ffc107", "#dc3545"],
  legend: {
    position: "bottom",
  },
};

var roomStatusChart = new ApexCharts(
  document.querySelector("#roomStatusChart"),
  roomStatusOptions
);
roomStatusChart.render();

// Room Types Bar Chart
var roomTypeOptions = {
  chart: {
    type: "bar",
    height: 250,
  },
  series: [
    {
      name: "Available Rooms",
      data: [20, 15, 10], // Single, Double, Suite
    },
  ],
  xaxis: {
    categories: ["Single", "Double", "Suite"],
  },
  colors: ["#007bff"],
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: true,
  },
};

var roomTypeChart = new ApexCharts(
  document.querySelector("#roomTypeChart"),
  roomTypeOptions
);
roomTypeChart.render();
