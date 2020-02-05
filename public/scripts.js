const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const iframeEl = document.querySelector('iframe')

for (let card of cards) {
	card.addEventListener('click', function() {
		if (card.hasAttribute('data-course')) {
			modalOverlay.classList.add('active')
			iframeEl.src = `https://rocketseat.com.br/${card.dataset.course}`
		}
	})
}

document.addEventListener('click', function(e) {
	if (e.target.matches('#close-modal') || e.target.matches('.modal-overlay')) {
		iframeEl.src = ''
		modalOverlay.classList.remove('active')
	}
})

// utilize a mesma lógica implementada para fechar o modalOverlay, mas trabalhe com a classe modal e utilize o método contains do classList para verificar se o elemento está ou não com a classe maximize

// O modal nunca deve abrir maximizado
