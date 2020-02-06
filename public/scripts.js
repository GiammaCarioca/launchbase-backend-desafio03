const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const iframeEl = document.querySelector('iframe')

for (let card of cards) {
	card.addEventListener('click', function() {
		if (card.hasAttribute('data-course')) {
			modalOverlay.classList.add('active')
			iframeEl.src = `https://rocketseat.com.br/${card.dataset.course}`
		}

		if (modal.classList.contains('maximize')) {
			modal.classList.remove('maximize')
		}
	})
}

function maximizeModal() {
	if (modal.classList.contains('maximize')) {
		return modal.requestFullscreen()
	} else {
		modal.classList.remove('maximize')
		return document.exitFullscreen()
	}
}

document.addEventListener('click', function(e) {
	if (e.target.matches('#close-modal') || e.target.matches('.modal-overlay')) {
		iframeEl.src = ''
		modalOverlay.classList.remove('active')

		modal.classList.remove('maximize')
		maximizeModal()
		return
	}

	if (e.target.closest('#maximize-modal')) {
		if (!modal.classList.contains('maximize')) {
			modal.classList.add('maximize')
		} else {
			modal.classList.remove('maximize')
			return maximizeModal()
		}
		return maximizeModal()
	}
})

document.addEventListener('fullscreenchange', e => {
	if (!document.fullscreenElement) {
		modal.classList.remove('maximize')
		maximizeModal()
		return
	}
})
