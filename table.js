
var myArray = [
    {'locker':'Shop Tiete', 'cliente':'Diego','pedido':'7639149', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Depositado'},
    {'locker':'Shop Tiete', 'cliente':'Emerson','pedido':'7639149', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Depositado'},
    {'locker':'Shop Tiete', 'cliente':'Esdras','pedido':'7639145', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Atrasado'},
    {'locker':'Shop Tiete', 'cliente':'Gustavo','pedido':'7639150', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Depositado'},
    {'locker':'Av Mutinga', 'cliente':'Jose','pedido':'7639141	', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Depositado'},
    {'locker':'Shop Tiete', 'cliente':'Julio','pedido':'7639148	', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Depositado'},
    {'locker':'Shop Tiete', 'cliente':'Maria','pedido':'7639142', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Retirado'},
    {'locker':'Shop Tiete', 'cliente':'Renato','pedido':'7639143', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Retirado'},
    {'locker':'Av Mutinga', 'cliente':'Rosane','pedido':'7639147', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Depositado'},
    {'locker':'Shop Tiete', 'cliente':'William','pedido':'7639146', 'telefone':'11 98452 4412', 'data':'24/11/2020', 'status':'Depositado'},
    
]


buildTable(myArray) 
    
function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colname = `locker-${i}`
        var colage = `cliente-${i}`
        var colbirth = `pedido-${i}`
        var colbirth = `telefone-${i}`
        var colbirth = `data-${i}`
        var colbirth = `status-${i}`

        var row = `<tr>
                        <td>${data[i].locker}</td>
                        <td>${data[i].cliente}</td>
                        <td>${data[i].pedido}</td>
                        <td>${data[i].telefone}</td>
                        <td>${data[i].data}</td>
                        <td>${data[i].status}</td>
                   </tr>`
        table.innerHTML += row
    }
}

// SORT TABLE BY HEADER

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true; 
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
