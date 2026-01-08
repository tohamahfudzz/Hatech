// Ambil container
const container = document.getElementById('produk-container');

// Load JSON
fetch('produk/produk.json')
  .then(response => response.json())
  .then(data => {
    data.data.forEach((item, index) => {
     

      const collapseId = `collapse${index}`;

   

      const card = document.createElement('div');
      card.className = 'col-md-4';

      card.innerHTML = `
        <div class="card bg-secondary h-100">
          <img src="${item.link}" class="card-img-top" alt="${item.nama}">
          <div class="card-body">
            <h5 class="card-title">${item.nama}</h5>
            </div>
          </div>
        </div>
      `;

  
  
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading JSON:', err));
