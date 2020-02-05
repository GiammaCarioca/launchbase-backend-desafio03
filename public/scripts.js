const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
	card.addEventListener('click', function() {
		modalOverlay.classList.add('active')
	})
}

document.addEventListener('click', function(e) {
	if (e.target.matches('#close-modal') || e.target.matches('.modal-overlay')) {
		modalOverlay.classList.remove('active')
	}
})
