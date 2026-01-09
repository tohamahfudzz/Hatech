
const container = document.getElementById('produk-container');

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
            <p class="card-text">
              <a 

                class="text-warning text-decoration-none"
                data-bs-toggle="collapse"
                href="#${collapseId}"
                role="button"
                aria-expanded="false"
                aria-controls="${collapseId}"
              >
                Lihat deskripsi lengkap

              </a>
            </p>
            <div class="collapse" id="${collapseId}">
              <p class="small">${item.deskripsi}</p>
            </div>
          </div>
        </div>
      `;




      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading JSON:', err));

