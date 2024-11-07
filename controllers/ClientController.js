import db from '../conf/db.js';
/* CRUD - CLIENT CONTROLLER */
const addClient = (req, res) => {
    // Add a new client

    const client = req.body;
    const query = `INSERT INTO clients VALUES (uuid(), '${client.name}', '${client.email}')`;

    console.log(query);

    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}
const getClient = (req, res) => {
    // Get a client
    const id = req.params.id;
    const query = `SELECT * FROM clients WHERE uuid = '${id}'`;
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}
const getClients = (req, res) => {

    // Get all clients
    let query = 'SELECT * FROM clients';

    if (req.query.search) {
        const search = req.query.search;
        query += ` WHERE name LIKE '%${search}%' OR email LIKE '%${search}%'`
    }

    if (req.query.sortKey && req.query.sortOrder) {
        const orderKey = req.query.sortKey;
        const orderValue = req.query.sortOrder;
        query += ' ORDER BY ' + orderKey + ' ' + orderValue
    } else {
        query += ' ORDER BY name asc'
    }
    const page = req.query.page;
    const limit = req.query.limit;
    const offset = (page - 1) * limit;
    query += ' LIMIT ' + limit + ' OFFSET ' + offset

    db.query(query, (err, result) => {
        if (err) res.status(500);
        db.query('SELECT COUNT(*) AS total FROM clients', (err, count) => {
            if (err) res.status(500);
            res.json({ data: result, total: count[0].total });
        });
    });
}
const updateClient = (req, res) => {
    // Update a client
    const client = req.body;

    console.log(client)

    const query = `UPDATE clients SET name = "${client.name}", email = '${client.email}' WHERE uuid = '${client.uuid}'`;
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}
const deleteClient = (req, res) => {
    // Delete a client
    const id = req.params.id;
    const query = `DELETE FROM clients WHERE uuid = '${id}'`;
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}

export default { addClient, getClient, getClients, updateClient, deleteClient };