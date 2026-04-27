// Seleciona o container onde os acordeões ficarão
const container = document.querySelector("#accordion-container");

async function carregarPets() {
  try {
    const resposta = await fetch('http://localhost:3000/api/pets');
    const pets = await resposta.json();

    // Gera o HTML para cada pet vindo do MySQL
    container.innerHTML = pets.map(pet => `
      <div class="accordion-item">
        <button class="accordion-header">
          ${pet.name} - ${pet.breed} (${pet.species})
        </button>
        <div class="accordion-content">
          <p>${pet.description}</p>
        </div>
      </div>
    `).join('');

    // Re-inicializa a lógica de clique após carregar os dados
    configurarAcordeoes();
    
  } catch (erro) {
    console.error("Erro ao carregar pets:", erro);
  }
}

function configurarAcordeoes() {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      // Fecha os outros
      headers.forEach(other => {
        if(other !== header) {
          other.nextElementSibling.style.maxHeight = null;
        }
      });

      // Abre/Fecha o atual
      const content = header.nextElementSibling;
      if(content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

// Inicia o processo
carregarPets();