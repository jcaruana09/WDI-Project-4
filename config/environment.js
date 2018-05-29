const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/project-4-starter-code';
const secret = process.env.SECRET || 'HUEie83*£&dj#jJS2@€';

module.exports = { port, dbURI, secret };
