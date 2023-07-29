import { createServer, Model } from 'miragejs';

createServer({
	models: {
		careers: Model,
		users: Model,
	},

	seeds(server) {
		server.create('career', {
			id: 1,
			title: 'Senior React Developer',
			salary: 50000,
			location: 'London, UK',
			hostId: '123',
		});
		server.create('career', {
			id: 2,
			title: 'Plumber',
			salary: 40000,
			location: "Bowser's Castle",
			hostId: '123',
		});
		server.create('career', {
			id: 3,
			title: 'Gym Leader',
			salary: 75000,
			location: 'Kanto Region',
			hostId: '123',
		});
		server.create('career', {
			id: 4,
			title: 'Vue Developer',
			salary: 40000,
			location: 'Liverpool, UK',
			hostId: '123',
		});
		server.create('career', {
			id: 5,
			title: 'Tutorial Maker',
			salary: 35000,
			location: 'Manchester, UK',
			hostId: '123',
		});
		server.create('career', {
			id: 6,
			title: 'Website Manager',
			salary: 50000,
			location: 'Berlin, Germany',
			hostId: '123',
		});
		server.create('career', {
			id: 7,
			title: 'Food Tester',
			salary: 30000,
			location: 'London, UK',
			hostId: '123',
		});
		server.create('career', {
			id: 8,
			title: 'PHP Developer',
			salary: 30000,
			location: 'Newyork, USA',
			hostId: '123',
		});
		server.create('user', {
			id: '123',
			email: 'b@b.com',
			password: 'p123',
			name: 'Bob',
		});
	},

	routes() {
		this.namespace = 'api';
		this.passthrough('https://firestore.googleapis.com/**');
		this.logging = false;
		// this.timing = 2000

		this.get('/careers', (schema, request) => {
			// return new Response(400, {}, {error: "Error fetching data"})
			return schema.careers.all();
		});

		this.get('/careers/:id', (schema, request) => {
			const id = request.params.id;
			return schema.careers.find(id);
		});
	},
});
