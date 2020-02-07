const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
	express: server,
	autoescape: false
})

server.get('/', (req, res) => {
	return res.render('courses', { courses })
})

server.get('/courses/:id', (req, res) => {
	const { id } = req.params

	const course = courses.find(course => course.id == id)

	if (!course) {
		return res.send('Course not found')
	}

	return res.render('course', { course })
})

server.get('/about', (req, res) => {
	const about = {
		name: 'Rocketseat',
		logo: 'logo-rocketseat.svg',
		shortDescription:
			'A menor distância entre você e seus objetivos como programador',
		longDescription:
			'Transforme sua carreira e seja um programador desejado no mercado, dominando as ferramentas mais modernas de desenvolvimento web e mobile. Cursos e treinamentos imersivos com foco nas melhores tecnologias, direto ao ponto e do jeito certo.',
		techs: [
			{
				name: 'NodeJS',
				image_url:
					'https://rocketseat.com.br/static/images/update/curso-nodejs.svg'
			},
			{
				name: 'ReactJS',
				image_url:
					'https://rocketseat.com.br/static/images/update/curso-reactjs.svg'
			},
			{
				name: 'React Native',
				image_url:
					'https://rocketseat.com.br/static/images/update/curso-react-native.svg'
			}
		]
	}

	return res.render('about', { about })
})

server.use(function(req, res) {
	return res.status(404).render('not-found')
})

server.listen(5000, () => console.log('server is running'))
