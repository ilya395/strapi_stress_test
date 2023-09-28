export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'strapi_db'),
			user: env('DATABASE_USERNAME', 'postres'),
			password: env('DATABASE_PASSWORD', 'root_root'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
