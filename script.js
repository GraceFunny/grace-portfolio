const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
button.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); }));

const filterButtons = document.querySelectorAll('.gallery-filters button'); const galleryCards = document.querySelectorAll('.gallery-grid figure'); filterButtons.forEach(button => button.addEventListener('click', () => { filterButtons.forEach(item => item.classList.remove('active')); button.classList.add('active'); const filter = button.dataset.filter; galleryCards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter)); }));
