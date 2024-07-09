# Create the following using HTML, CSS, and JavaScript

![project_leaderboard](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_mini_project_leaderboard_day_8.1.gif)

<table id="leaderboard">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Country</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Doe</td>
      <td>United States</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jane Smith</td>
      <td>Canada</td>
      <td>950</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bob Johnson</td>
      <td>United Kingdom</td>
      <td>900</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Alice Williams</td>
      <td>Australia</td>
      <td>850</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Charlie Brown</td>
      <td>New Zealand</td>
      <td>800</td>
    </tr>
  </tbody>
</table>

#leaderboard {
  width: 100%;
  border-collapse: collapse;
}

#leaderboard th,
#leaderboard td {
  padding: 8px;
  border: 1px solid #ccc;
}

#leaderboard th {
  background-color: #f2f2f2;
  font-weight: bold;
}

#leaderboard tr:nth-child(even) {
  background-color: #f9f9f9;
}

#leaderboard tr:hover {
  background-color: #e0e0e0;
}

#leaderboard td:first-child {
  width: 5%;
}

#leaderboard td:nth-child(2) {
  width: 30%;
}

#leaderboard td:nth-child(3) {
  width: 30%;
}

// Data for the leaderboard
const leaderboardData = [
  { rank: 1, name: 'John Doe', country: 'United States', points: 1000 },
  { rank: 2, name: 'Jane Smith', country: 'Canada', points: 950 },
  { rank: 3, name: 'Bob Johnson', country: 'United Kingdom', points: 900 },
  { rank: 4, name: 'Alice Williams', country: 'Australia', points: 850 },
  { rank: 5, name: 'Charlie Brown', country: 'New Zealand', points: 800 }
];

// Function to create a table row
function createTableRow(data) {
  // Create the row element
  const row = document.createElement('tr');

  // Create the cells and set their content
  const cells = ['rank', 'name', 'country', 'points'].map(key => {
    const cell = document.createElement('td');
    cell.textContent = data[key];
    return cell;
  });

#leaderboard td:last-child {
  width: 35%;
}

