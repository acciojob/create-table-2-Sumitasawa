function createTable() {
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");
  rn = Number(rn);
  cn = Number(cn);
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numbers!");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0!");
    return;
  }

  let table = document.getElementById("myTable");
  table.innerHTML = "";
  for (let i = 0; i < rn; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      let cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
