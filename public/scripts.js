const cards = document.getElementsByClassName('card')

for (let card of cards) {
	card.addEventListener('click', function() {
		const courseId = card.getAttribute('id')
		window.location.href = `/courses/course?id=${courseId}`
	})
}
