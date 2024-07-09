# Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)

![world-countries-data](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_bar_graph_day_5.1.gif)

![world-countries-languages](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_bar_graph_day_5.1.png)


<html>
<head>
<title></title>
<style>
    #chart {
  display: flex;
  justify-content: space-between;
}

</style>
<script>
     // Data for the most populated countries
const countriesData = [
  { name: 'China', population: 1439323776 },
  { name: 'India', population: 1380004385 },
  { name: 'United States', population: 331002651 },
  { name: 'Indonesia', population: 273523615 },
  { name: 'Pakistan', population: 220892340 },
  { name: 'Brazil', population: 212559417 },
  { name: 'Nigeria', population: 206139589 },
  { name: 'Bangladesh', population: 164689383 },
  { name: 'Russia', population: 145934462 },
  { name: 'Mexico', population: 128932753 }
];


</script>
</head>
<body>
   <div id="chart"></div>
</body>
</html>
   