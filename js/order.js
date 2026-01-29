let cart=[];

function loadOrder(){
  const outlets = JSON.parse(localStorage.getItem('outlets'))||[];
  const select = document.getElementById('outletSelect');
  outlets.forEach(o=>{
    select.innerHTML += `<option value="${o.nama}">${o.nama}</option>`;
  });

  produk.forEach((p,i)=>{
    document.getElementById('produkList').innerHTML += `
      <tr>
        <td>${p.nama}</td>
        <td><input type="number" id="k${i}" value="0" onchange="updateTotal(${i})"></td>
        <td id="t${i}">0</td>
      </tr>
    `;
  });
}

function updateTotal(i){
  const k = document.getElementById('k'+i).value;
  const t = k*produk[i].harga;
  document.getElementById('t'+i).innerText = t;
  cart[i] = {nama:produk[i].nama,karton:k,total:t};
  document.getElementById('total').innerText = cart.reduce((a,b)=>a+(b?b.total:0),0);
}

function saveOrder(){
  const orders = JSON.parse(localStorage.getItem('orders'))||[];
  orders.push({outlet: document.getElementById('outletSelect').value, cart, total: document.getElementById('total').innerText});
  localStorage.setItem('orders',JSON.stringify(orders));
  alert("Order tersimpan ✅");
}
