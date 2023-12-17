
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
  password: 'selim',
  port: 5432,
});
let names1 :string =""  ;
let abc1:boolean =false;

// Route for handling signup POST request
app.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error; // Handle other system-level errors
  }

  // Handle specific listen errors
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
  //plats
   //get plats
  app.get('/plats', async (req, res) => {
    try {
      const client = await pool.connect();
      const query = `SELECT * FROM plats ;`;
      await client.query('BEGIN') ;
      const result = await client.query(query);
      res.json(result.rows);
      client.release();
    } catch (error) {
      console.error('Error retrieving plats :', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  //edit plat
  app.put('/platsE/:platId', async (req, res) => {
    const platId = req.params.platId;
    const updatedPlat = req.body;

    try {
      const client = await pool.connect();
      const updateQuery = "UPDATE plats SET name= $1, descr= $2, src= $3, price= $4 WHERE id_plat = $5 ;" ;

      const values = [updatedPlat.name,updatedPlat.descr,updatedPlat.src,updatedPlat.price,platId];
      await client.query('BEGIN');
      await client.query(updateQuery, values);
      await client.query('COMMIT');
      res.json({ message: 'Plat updated successfully' });
      client.release();
    } catch (error) {
      console.error('Error updating Plat:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  //create plat
  app.post('/platsI', async (req, res) => {
    const newPlat = req.body;
  
    try {
      const client = await pool.connect();
      const insertQuery = "INSERT INTO plats (name, descr, src,price) VALUES ($1, $2, $3,$4) " ;
      console.log(newPlat) ;
      const values = [ newPlat.name, newPlat.descr,newPlat.src,newPlat.price];
      await client.query('BEGIN') ;
      const result = await client.query(insertQuery, values);
      await client.query('COMMIT');
      res.status(201).json({ message: result.rows});
      client.release();
    } catch (error) {
      console.error('Error adding plat :', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  //delete plats
  app.put('/platsD/:platId', async (req, res) => {
    const platId = req.params.platId;
  
    try {
      const client = await pool.connect();
      const updateQuery = "DELETE FROM plats WHERE id_plat =$1" ;

      const values = [platId];
      await client.query('BEGIN');
      await client.query(updateQuery, values);
      await client.query('COMMIT');
      res.json({ message: 'User updated successfully' });
      client.release();
    } catch (error) {
      console.error('Error updating User:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  //users

    //get users
    app.get('/users', async (req, res) => {
      try {
        const client = await pool.connect();
        const query = `SELECT * FROM client ;`;
        await client.query('BEGIN') ;
        const result = await client.query(query);
        res.json(result.rows);
        client.release();
      } catch (error) {
        console.error('Error retrieving orders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    //edit user
    app.put('/users/:userId', async (req, res) => {
      const userId = req.params.userId;
      const updatedUser = req.body;
    
      try {
        const client = await pool.connect();
        const updateQuery = "UPDATE client SET full_name = $1, email = $2, phone_number =$3, password= $4 WHERE client_id = $5 ;" ;

        const values = [updatedUser.full_name, updatedUser.email,updatedUser.phone_number,updatedUser.password, userId];
        await client.query('BEGIN');
        await client.query(updateQuery, values);
        await client.query('COMMIT');
        res.json({ message: 'User updated successfully' });
        client.release();
      } catch (error) {
        console.error('Error updating User:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    //add user
    app.post('/userss', async (req, res) => {
      const newUser = req.body;
    
      try {
        const client = await pool.connect();
        const insertQuery = "INSERT INTO client (full_name, email, phone_number, password) VALUES ($1, $2, $3, $4) " ;

        const values = [ newUser.full_name, newUser.email, parseInt(newUser.phone_number),newUser.password];
        await client.query('BEGIN');
        const result = await client.query(insertQuery, values);
        await client.query('COMMIT');
        res.status(201).json({ message: 'User created successfully', user: result.rows[0]});

        client.release();
      } catch (error) {
        console.error('Error creating User:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    //delete user
    app.put('/usersD/:userId', async (req, res) => {
      const userId = req.params.userId;
    
      try {
        const client = await pool.connect();
        const updateQuery = "DELETE FROM client WHERE client_id =$1" ;

        const values = [userId];
        await client.query('BEGIN');
        await client.query(updateQuery, values);
        await client.query('COMMIT');
        res.json({ message: 'User updated successfully' });
        client.release();
      } catch (error) {
        console.error('Error updating User:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
    
   // signup
app.post('/signup', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body;

    const insertQuery = `
      INSERT INTO client (full_name, email, phone_number, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;

    const values = [fullName, email, phoneNumber, password];

    const client = await pool.connect();
    await client.query('BEGIN'); 

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
    const id :string=result.rows[0].client_id ;
    const type :Number=result.rows[0].user_type ;


      res.json({ message:true,type: type,messages:name,id:id}) // User with matching email and password found
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
