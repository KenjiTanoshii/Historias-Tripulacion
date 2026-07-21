// ================================
// DATOS DE HISTORIAS
// ================================

const stories = [
  {
    id: 1,
    name: "Personaje 1",
    role: "Capitán",
    age: "35 años",
    origin: "Las Islas Perdidas",
    status: "Vivo",
    x: 150,
    y: 200,
    text: `Una vez fue un príncipe, heredero de un reino poderoso. Pero la ambición de su padre lo llevó a cometer atrocidades. Cuando intentó detenerlo, fue traicionado por su propia familia y declarado traidor.

Ahora navega con los derrotados, buscando redención en cada acción, cada decisión. Su culpa es tan pesada como el ancla de su barco.`
  },
  {
    id: 2,
    name: "Personaje 2",
    role: "Navegante",
    age: "28 años",
    origin: "Tierras del Norte",
    status: "Vivo",
    x: 350,
    y: 150,
    text: `Era bruja antes de que los cazadores quemaran su aldea. Acusada de sorcería por hacer lo único que sabía: sanar. Escapó con vida, pero perdió su magia en el fuego.

Ahora guía el barco usando las estrellas que una vez maldijo, encontrando propósito en las noches oscuras.`
  },
  {
    id: 3,
    name: "Personaje 3",
    role: "Espadachín",
    age: "41 años",
    origin: "El Continente Lejano",
    status: "Vivo",
    x: 550,
    y: 300,
    text: `Fue general de un ejército invencible. Ganó cien batallas, pero perdió la guerra que importaba: la de su propia consciencia.

Cansado de matar por órdenes ajenas, se rebeló. Lo persiguieron como cazaban bestias. En la tripulación encontró un arma diferente: la verdad.`
  },
  {
    id: 4,
    name: "Personaje 4",
    role: "Cocinero",
    age: "52 años",
    origin: "Ciudad Dorada",
    status: "Vivo",
    x: 800,
    y: 200,
    text: `Fue chef de reyes. Sus platos alimentaban la vanidad de nobles corruptos. Un día, eligió alimentar a hambrientos en lugar de ricos.

Lo acusaron de robar. Lo castigaron por compasión. Ahora cocina para aquellos que el mundo olvidó, y esa es su mayor victoria.`
  },
  {
    id: 5,
    name: "Personaje 5",
    role: "Médico",
    age: "33 años",
    origin: "La Academia",
    status: "Vivo",
    x: 400,
    y: 500,
    text: `Estudiaba medicina en la más prestigiosa universidad. Cuando descubrió que sus mentores creaban armas biológicas, quiso denunciar.

Fue descubierto. Ahora cura las heridas que otros causan, luchando contra el sistema que lo formó, redimiendo su silencio pasado con cada venda que coloca.`
  }
];

// ================================
// VARIABLES GLOBALES
// ================================

let currentStoryIndex = 0;

// ================================
// INICIALIZACIÓN
// ================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Página cargada');
  initializeMap();
  attachEventListeners();
});

// ================================
// DIBUJAR MAPA
// ================================

function initializeMap() {
  console.log('Inicializando mapa...');
  const islandsContainer = document.getElementById('islands');
  if (!islandsContainer) {
    console.error('No se encontró el contenedor de islas');
    return;
  }
  
  islandsContainer.innerHTML = '';

  stories.forEach((story, index) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.classList.add('island');
    group.setAttribute('data-index', index);

    // Círculo de la isla
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', story.x);
    circle.setAttribute('cy', story.y);
    circle.setAttribute('r', '35');
    circle.classList.add('island-circle');

    // Nombre del personaje
    const nameText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    nameText.setAttribute('x', story.x);
    nameText.setAttribute('y', story.y - 5);
    nameText.classList.add('island-label', 'island-name');
    nameText.textContent = story.name.split(' ')[0];

    // Rol/Título
    const roleText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    roleText.setAttribute('x', story.x);
    roleText.setAttribute('y', story.y + 12);
    roleText.setAttribute('font-size', '11');
    roleText.classList.add('island-label');
    roleText.textContent = story.role;

    group.appendChild(circle);
    group.appendChild(nameText);
    group.appendChild(roleText);

    group.addEventListener('click', () => openStory(index));

    islandsContainer.appendChild(group);
  });
  
  console.log('Mapa inicializado con ' + stories.length + ' islas');
}

// ================================
// ABRIR HISTORIA
// ================================

function openStory(index) {
  console.log('Abriendo historia ' + index);
  currentStoryIndex = index;
  const story = stories[index];

  document.getElementById('storyCharacterName').textContent = story.name;
  document.getElementById('storyRole').textContent = story.role;
  document.getElementById('storyText').innerHTML = `<p>${story.text}</p>`;
  document.getElementById('storyAge').textContent = story.age;
  document.getElementById('storyOrigin').textContent = story.origin;
  document.getElementById('storyStatus').textContent = story.status;
  document.getElementById('storyCounter').textContent = `${index + 1} / ${stories.length}`;

  document.getElementById('prevStory').disabled = index === 0;
  document.getElementById('nextStory').disabled = index === stories.length - 1;

  const modal = document.getElementById('storyModal');
  modal.classList.add('active');
}

// ================================
// CERRAR HISTORIA
// ================================

function closeStory() {
  console.log('Cerrando historia');
  const modal = document.getElementById('storyModal');
  modal.classList.remove('active');
}

// ================================
// NAVEGACIÓN
// ================================

function showPreviousStory() {
  if (currentStoryIndex > 0) {
    openStory(currentStoryIndex - 1);
  }
}

function showNextStory() {
  if (currentStoryIndex < stories.length - 1) {
    openStory(currentStoryIndex + 1);
  }
}

function goToMap() {
  console.log('Ir al mapa');
  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('mapScreen').classList.add('active');
}

function goToStart() {
  console.log('Ir al inicio');
  document.getElementById('startScreen').classList.add('active');
  document.getElementById('mapScreen').classList.remove('active');
  closeStory();
}

// ================================
// EVENT LISTENERS
// ================================

function attachEventListeners() {
  console.log('Adjuntando event listeners...');
  
  const startBtn = document.getElementById('startBtn');
  const backBtn = document.getElementById('backBtn');
  const closeModal = document.getElementById('closeModal');
  const nextStory = document.getElementById('nextStory');
  const prevStory = document.getElementById('prevStory');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      console.log('Click en Explorar');
      goToMap();
    });
  } else {
    console.error('No se encontró startBtn');
  }

  if (backBtn) {
    backBtn.addEventListener('click', goToStart);
  } else {
    console.error('No se encontró backBtn');
  }

  if (closeModal) {
    closeModal.addEventListener('click', closeStory);
  } else {
    console.error('No se encontró closeModal');
  }

  if (nextStory) {
    nextStory.addEventListener('click', showNextStory);
  } else {
    console.error('No se encontró nextStory');
  }

  if (prevStory) {
    prevStory.addEventListener('click', showPreviousStory);
  } else {
    console.error('No se encontró prevStory');
  }

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('storyModal').classList.contains('active')) {
        closeStory();
      } else if (document.getElementById('mapScreen').classList.contains('active')) {
        goToStart();
      }
    }
  });

  // Navegación con flechas
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('storyModal').classList.contains('active')) {
      if (e.key === 'ArrowLeft') showPreviousStory();
      if (e.key === 'ArrowRight') showNextStory();
    }
  });

  // Cerrar modal al hacer clic fuera
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        closeStory();
      }
    });
  }

  console.log('Event listeners adjuntados correctamente');
}
