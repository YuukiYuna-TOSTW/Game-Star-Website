// Toggle sidebar on mobile
function toggleSidebar() {
  const sidebar = document.getElementById('sidebarMenu');
  const overlay = document.querySelector('.overlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('sidebar-open');
}

// Fungsi untuk menampilkan section tertentu
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active-section');
  });
  
  // Show the selected section
  document.getElementById(sectionId).classList.add('active-section');
}

// Fungsi untuk menyaring karakter berdasarkan elemen
document.addEventListener('DOMContentLoaded', function() {
  // Elemen yang diperlukan
  const elementFilters = document.querySelectorAll('.element-filter');
  const characters = document.querySelectorAll('.character');
  const showAllBtn = document.getElementById('show-all');
  
  // Fungsi filter karakter
  function filterCharacters(element) {
    // Update tampilan ikon elemen
    elementFilters.forEach(filter => {
      filter.classList.toggle('active', filter.dataset.element === element);
    });
    
    // Filter karakter
    characters.forEach(character => {
      const shouldShow = element === 'all' || 
                        character.dataset.element.toLowerCase() === element.toLowerCase();
      character.style.display = shouldShow ? 'block' : 'none';
    });
  }
  
  // Event listener untuk filter elemen
      elementFilters.forEach(filter => {
        filter.addEventListener('click', () => {
          filterCharacters(filter.dataset.element);
        });
      });
      
      // Event listener untuk tombol show all
      showAllBtn.addEventListener('click', () => {
        filterCharacters('all');
      });
      
      // Inisialisasi - tampilkan semua karakter
      filterCharacters('all');
    });
    
    // Smooth scroll ke bagian karakter
    setTimeout(() => {
      charactersContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  
  // Event listener untuk filter elemen
  elementFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      filterCharacters(filter.dataset.element);
    });
  });
  
  // Event listener untuk tombol show all
  showAllBtn.addEventListener('click', () => {
    filterCharacters('all');
  });
  
  // Inisialisasi - tampilkan semua karakter
  filterCharacters('all');

  // Fungsi untuk menampilkan detail karakter
  function showCharacterDetail(characterName) {
    const character = characterDB[characterName];
    if (!character) {
      console.error('Character data not found:', characterName);
      return;
    }

    // Update tampilan detail
    document.getElementById('character-detail-name').textContent = characterName;
    document.getElementById('character-detail-image').src = `images/${characterName.replace(/\s+/g, '')}.png`;
    document.getElementById('character-detail-element').textContent = character.element;
    document.getElementById('character-detail-element').className = `element-badge ${character.element.toLowerCase()}`;
    document.getElementById('character-detail-weapon').textContent = character.weapon;
    document.getElementById('character-detail-region').textContent = character.region;
    document.getElementById('character-detail-description').textContent = character.description;
    
    // Update stats
    document.getElementById('character-hp').textContent = character.stats.hp;
    document.getElementById('character-atk').textContent = character.stats.atk;
    document.getElementById('character-def').textContent = character.stats.def;
    
    // Update skills
    const skillsList = document.getElementById('character-skills');
    skillsList.innerHTML = character.skills.map(skill => 
      `<div class="list-group-item">${skill}</div>`
    ).join('');

    // Tampilkan detail view dan sembunyikan grid
    document.getElementById('grid-mode').style.display = 'none';
    document.getElementById('character-detail-view').style.display = 'block';
  }

  // Fungsi kembali ke grid view
  document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('grid-mode').style.display = 'block';
    document.getElementById('character-detail-view').style.display = 'none';
  });

  // Event listener untuk karakter
  document.querySelectorAll('.character').forEach(char => {
    char.addEventListener('click', function() {
      const characterName = this.dataset.name;
      showCharacterDetail(characterName);
    });
  });

// Data Karakter Lengkap
const characterDB = {
  "Kamisato Ayaka": {
    element: "Cryo",
    weapon: "Sword",
    region: "Inazuma",
    description: "Putri dari Klan Kamisato dari Komisi Yashiro. Dikenal sebagai Shirasagi Himegimi, ahli pedang yang elegan.",
    stats: {
      hp: "12,857",
      atk: "342",
      def: "784"
    },
    skills: [
      "Kamisato Art: Kabuki - Normal Attack",
      "Kamisato Art: Hyouka - Elemental Skill",
      "Kamisato Art: Soumetsu - Elemental Burst"
    ]
  },
  "Nilou": {
    element: "Hydro",
    weapon: "Sword",
    region: "Sumeru",
    description: "Penari terkenal dari Teater Zubayr.",
    stats: {
      hp: "15,185",
      atk: "299",
      def: "735"
    },
    skills: [
      "Dance of Samser - Normal Attack",
      "Dance of Haftkarsvar - Elemental Skill",
      "Dance of Abzendegi: Distant Dreams - Elemental Burst"
    ]
  },
  // Tambahkan data untuk semua karakter lainnya...
};

// DOM Elements
const gridView = document.getElementById('character-grid-view');
const detailView = document.getElementById('character-detail-view');
const backButton = document.getElementById('back-button');

  