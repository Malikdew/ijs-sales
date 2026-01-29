function loadRute(){
  const outlets = JSON.parse(localStorage.getItem('outlets'))||[];
  const tbody = document.getElementById('listRute');
  tbody.innerHTML="";
  outlets.forEach(o=>{
    tbody.innerHTML += `
      <tr>
        <td>${o.kode}</td>
        <td>${o.nama}</td>
        <td>☐</td>
      </tr>
    `;
  });
}
