
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(bodyParser.json());

// Initialize PostgreSQL pool
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'Fifer8263',
  port: 5432,
});
let names1 :string =""  ;
let abc1:boolean =false;
let inputData :any ;
// Route for handling signup POST request
app.post('/Tarrification',async(req,res)=>{
  const selectQuery = 'SELECT * from services ;' ;
  const client = await pool.connect();
    await client.query('BEGIN');
  const result = await client.query(selectQuery);
  res.send(result.rows) ;

})
app.post('/asking',async(req,res)=>{
  
res.json({ message:"request sent "})
 inputData=req.body ;
})
app.post('/asking1', async (req, res) => {
  res.json({ inputData})
 })
app.post('/signup', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body;

    // Insert new client data into the 'client' table
    const insertQuery = `
      INSERT INTO client (full_name, email, phone_number, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;

    const values = [fullName, email, phoneNumber, password];

    const client = await pool.connect();
    await client.query('BEGIN'); // Start a transaction

    const result = await client.query(insertQuery, values);
    const clientId = result.rows[0].id;

    await client.query('COMMIT'); // Commit the transaction

    res.status(201).json({ message: 'Signup successful', clientId });
  } catch (error) {
    console.error(error);

    // Rollback the transaction in case of an error
    if (this.client) {
      await this.client.query('ROLLBACK');
    }

    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (this.client) {
      this.client.release(); // Release the client back to the pool
    }
  }
});

app.post('/storage', async (req, res) => {
  const { names , abc} =req.body  ;
  
})
app.post('/storage1', async (req, res) => {
 res.json({ name: this.names,abc:this.abc})
})

// Route for handling login POST request
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const selectQuery = 'SELECT * FROM client WHERE email = $1 AND password = $2';
    const values = [email, password];

    const client = await pool.connect();
    await client.query('BEGIN');

    const result = await client.query(selectQuery, values);

    if (result.rows.length > 0) {    
    const name :string=result.rows[0].full_name ;

      res.json({ message: true,messages:name}) // User with matching email and password found
    } else {
      res.json({ message: false}) // No matching user found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (this.client) {
      this.client.release(); // Release the client back to the pool
         }
  }
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on port ${port}`);
});
