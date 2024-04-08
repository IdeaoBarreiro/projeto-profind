import { Pool } from 'pg';

const pool = new Pool({
    user: 'PostgreSQL 15',
    host: '127.0.0.1',
    database: 'PostgreSQL 15',
    password: 'abrilMIL',
    port: 5432,
});

export default pool;