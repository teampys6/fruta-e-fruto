const navEl = document.querySelector('nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open')
});

navEl.addEventListener('click', () => {
  navEl.classList.remove('nav--open');
  hamburgerEl.classList.remove('hamburger--open')
});

// Modal functionality
const recipes = {
  'tigela-abacate': {
    title: 'Tigela de abacate',
    image: 'assets/images/tigela_abacate.png',
    description: 'Receita refrescante e cheia de vitaminas para de seu café da manhã.',
    ingredients: [
      '1 abacate maduro',
      '1 banana',
      '1/2 xícara de leite (ou leite vegetal)',
      '1 colher de mel',
      'Granola a gosto',
      'Frutas frescas para decorar'
    ],
    instructions: [
      'Corte o abacate ao meio e retire o caroço',
      'Retire a polpa do abacate e coloque no liquidificador',
      'Adicione a banana, o leite e o mel',
      'Bata até obter uma textura cremosa',
      'Sirva em uma tigela e adicione granola e frutas por cima',
      'Desfrute imediatamente!'
    ]
  },
  'salada-kiwi': {
    title: 'Salada de kiwi',
    image: 'assets/images/salada_kiwi.png',
    description: 'Receita refrescante e cheia de vitaminas para de seu café da manhã.',
    ingredients: [
      '3 kiwis maduros',
      '1 xícara de morangos',
      '1/2 xícara de uvas',
      '1 colher de mel',
      'Suco de meio limão',
      'Folhas de hortelã'
    ],
    instructions: [
      'Descasque e corte os kiwis em rodelas',
      'Lave e corte os morangos ao meio',
      'Lave as uvas',
      'Misture todas as frutas em uma tigela',
      'Regue com mel e suco de limão',
      'Decore com folhas de hortelã e sirva'
    ]
  },
  'mix-vegetais': {
    title: 'Mix de vegetais',
    image: 'assets/images/mix_vegetais.png',
    description: 'Receita refrescante e cheia de vitaminas para de seu café da manhã.',
    ingredients: [
      '1 cenoura média',
      '1 pepino',
      '1 tomate',
      '1/2 pimentão vermelho',
      '1/2 pimentão amarelo',
      'Azeite de oliva',
      'Sal e pimenta a gosto',
      'Ervas frescas'
    ],
    instructions: [
      'Lave todos os vegetais',
      'Corte a cenoura em palitos',
      'Corte o pepino em rodelas',
      'Corte o tomate em cubos',
      'Corte os pimentões em tiras',
      'Misture todos os vegetais',
      'Tempere com azeite, sal, pimenta e ervas',
      'Sirva fresco'
    ]
  },
  'prato-oriental': {
    title: 'Prato oriental',
    image: 'assets/images/prato_oriental.png',
    description: 'Receita refrescante e cheia de vitaminas para seu café da manhã.',
    ingredients: [
      '200g de arroz integral',
      '100g de tofu',
      '1 cenoura',
      '1/2 xícara de brócolis',
      'Molho de soja',
      'Gengibre ralado',
      'Alho picado'
    ],
    instructions: [
      'Cozinhe o arroz integral conforme instruções',
      'Corte o tofu em cubos e grelhe',
      'Corte a cenoura em tiras finas',
      'Cozinhe o brócolis no vapor',
      'Refogue o alho e gengibre',
      'Misture todos os ingredientes',
      'Tempere com molho de soja e sirva'
    ]
  },
  'beterrabas-assadas': {
    title: 'Beterrabas assadas',
    image: 'assets/images/beterrabas_assadas.png',
    description: 'Receita refrescante e cheia de vitaminas para seu café da manhã.',
    ingredients: [
      '3 beterrabas médias',
      'Azeite de oliva',
      'Sal e pimenta',
      'Alecrim fresco',
      'Alho em lâminas'
    ],
    instructions: [
      'Pré-aqueça o forno a 200°C',
      'Descasque e corte as beterrabas em cubos',
      'Tempere com azeite, sal e pimenta',
      'Adicione alecrim e alho',
      'Asse por 30-40 minutos até ficarem macias',
      'Sirva quente ou em temperatura ambiente'
    ]
  },
  'pimentoes-juliana': {
    title: 'Pimentões à Juliana',
    image: 'assets/images/pimentoes_juliana.png',
    description: 'Receita refrescante e cheia de vitaminas para seu café da manhã.',
    ingredients: [
      '2 pimentões vermelhos',
      '1 pimentão amarelo',
      '1 pimentão verde',
      '1 cebola',
      'Azeite de oliva',
      'Sal e pimenta',
      'Vinagre balsâmico'
    ],
    instructions: [
      'Lave e corte os pimentões em tiras finas',
      'Corte a cebola em meias-luas',
      'Aqueça o azeite em uma panela',
      'Refogue a cebola até ficar transparente',
      'Adicione os pimentões e cozinhe até ficarem macios',
      'Tempere com sal, pimenta e vinagre balsâmico',
      'Sirva quente'
    ]
  }
};

const modal = document.getElementById('recipeModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalIngredients = document.getElementById('modalIngredients');
const modalInstructions = document.getElementById('modalInstructions');

// Adicionar event listeners aos botões
document.querySelectorAll('.rectangle-products button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const recipeCard = button.closest('.rectangle-products');
    const recipeId = recipeCard.getAttribute('data-recipe');
    const recipe = recipes[recipeId];
    
    if (recipe) {
      modalImage.src = recipe.image;
      modalImage.alt = recipe.title;
      modalTitle.textContent = recipe.title;
      modalDescription.textContent = recipe.description;
      
      modalIngredients.innerHTML = '';
      recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
      });
      
      modalInstructions.innerHTML = '';
      recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        modalInstructions.appendChild(li);
      });
      
      modal.classList.add('modal--open');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Fechar modal
closeModal.addEventListener('click', () => {
  modal.classList.remove('modal--open');
  document.body.style.overflow = '';
});

// Fechar modal ao clicar fora
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }
});