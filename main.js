// loader
document.getElementById("table").innerHTML = `
<div class="spin-container">
  <div class="loader"></div>
</div>`;

fetch("https://swapi.co/api/planets/")
  .then(res => res.json())
  .then(res => {
    console.log(res);
    next = res.next;
    const output = `
    <thead>
        <tr>
            <th scope="col">Nama Planet</th>
            <th scope="col">Periode Rotasi</th>
            <th scope="col">Periode Orbital</th>
            <th scope="col">Diameter</th>
            <th scope="col">Iklim</th>
            <th scope="col">Gravitasi</th>
            <th scope="col">Medan</th>
            <th scope="col">Permukaan Air</th>
        </tr>
    </thead>
    <tbody>
        ${res.results
          .map(value => {
            return `
        <tr>
            <td>${value.name}</td>
            <td>${value.rotation_period}</td>
            <td>${value.orbital_period}</td>
            <td>${value.diameter}</td>
            <td>${value.climate}</td>
            <td>${value.gravity}</td>
            <td>${value.terrain}r</td>
            <td>${value.surface_water}</td>
        </tr>  
        `;
          })
          .join(" ")}
    </tbody>
    `;
    console.log("selanjutnya", next);
    document.getElementById("table").innerHTML = output;
  });

  // filter function
function filterName() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

let next;

const nextPage = () => {
  // loader
  document.getElementById("table").innerHTML = `
  <div class="spin-container">
    <div class="loader"></div>
  </div>`;

  fetch(next)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      next = res.next;
      previous = res.previous;
      const output = `
    <thead>
        <tr>
          <th scope="col">Nama Planet</th>
          <th scope="col">Periode Rotasi</th>
          <th scope="col">Periode Orbital</th>
          <th scope="col">Diameter</th>
          <th scope="col">Iklim</th>
          <th scope="col">Gravitasi</th>
          <th scope="col">Medan</th>
          <th scope="col">Permukaan Air</th>
        </tr>
    </thead>
    <tbody>
        ${res.results
          .map(value => {
            return `
        <tr>
            <td>${value.name}</td>
            <td>${value.rotation_period}</td>
            <td>${value.orbital_period}</td>
            <td>${value.diameter}</td>
            <td>${value.climate}</td>
            <td>${value.gravity}</td>
            <td>${value.terrain}r</td>
            <td>${value.surface_water}</td>
        </tr>  
        `;
          })
          .join(" ")}
    </tbody>
    `;
      console.log("selanjutnya", next);
      document.getElementById("table").innerHTML = output;
    });
};

let previous;

const previousPage = () => {
  // loader
  document.getElementById("table").innerHTML = `
<div class="spin-container">
  <div class="loader"></div>
</div>`;

  fetch(previous)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      next = res.next;
      previous = res.previous;
      const output = `
    <thead>
        <tr>
          <th scope="col">Nama Planet</th>
          <th scope="col">Periode Rotasi</th>
          <th scope="col">Periode Orbital</th>
          <th scope="col">Diameter</th>
          <th scope="col">Iklim</th>
          <th scope="col">Gravitasi</th>
          <th scope="col">Medan</th>
          <th scope="col">Permukaan Air</th>
        </tr>
    </thead>
    <tbody>
        ${res.results
          .map(value => {
            return `
        <tr>
            <td>${value.name}</td>
            <td>${value.rotation_period}</td>
            <td>${value.orbital_period}</td>
            <td>${value.diameter}</td>
            <td>${value.climate}</td>
            <td>${value.gravity}</td>
            <td>${value.terrain}r</td>
            <td>${value.surface_water}</td>
        </tr>  
        `;
          })
          .join(" ")}
    </tbody>
    `;
      console.log("selanjutnya", next);
      console.log("sebelumnya", previous);
      document.getElementById("table").innerHTML = output;
    });
};
