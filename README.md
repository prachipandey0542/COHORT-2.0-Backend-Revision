# Backend Revision & Documentation Journey

Welcome to my backend repository! During my initial learning phase, my entire focus was on writing code and building logic. Now, I want to systematically organize and document my complete backend journey day-by-day to track my progress and keep my fundamentals sharp.

<details>
<summary><b>📅 Day 1: Node.js & Express Basics.</b></summary>
  
- Setup Node.js environment and executed JavaScript outside the browser.
- Learned Node.js fundamentals and its working.
- Understood npm, packages, package.json and package-lock.json.
- Learned basic server concepts.
- Created and configured my first Express.js server.

</details>

<details>
<summary><b>📅 Day 2: Taking My First Server Live.</b></summary>
  
- Created and started a server and understood how PORTS work.
- Wrote my first REST APIs using HTTP methods (GET).
- Connected my local backend folder to the remote GitHub repository.
- Deployed my first live server on Render.

</details>

<details>
<summary><b>📅 Day 3: APIs, HTTP Protocols & My First CRUD Application.</b></summary>
  
- Learned what an API is and how it allows different systems to talk to each other.
- Understood how two software programs exchange data over a network.
- Explored HTTP methods and protocols that govern client-server interaction.
- Created a fully functional Notes server from scratch without using a database.
- Wrote backend logic to Create, Read, notes using HTTP methods (GET, POST,) with memory-based storage.

</details>

<details>
<summary><b>📅 Day 4: Improve Folder Structure & Understand Request Handling.</b></summary>
  
- Created a src folder to better organize the project code.
- Wrote the server creation and configuration logic inside src/app.js.
- Created a main server.js file to import the app and start the server.
- Set up custom npm scripts like 'npm run dev' to execute the project easily.
- Completed the Notes Application by adding the update and delete API endpoints usign (PATCH, PUT, DELETE).
- Learned how to read incoming client data using req.body and req.params.

</details>

<details>
<summary><b>📅 Day 5: HTTP Status Codes & Database Theory.</b></summary>
  
- Mastered the lifecycle of standard response codes across success, client, and server errors.
- Deepened core API development concepts by practicing standard CRUD routing operations.
- Explored document-oriented database architecture and schema-less data storage fundamentals.
- Configured a secure cloud database infrastructure using a remote cluster deployment (MongoDB Atlas).
- Integrated a local GUI (MongoDB Compass) to streamline live data monitoring and visualization.

</details>

<details>
  <summary><b>📅 Day 6: Database Architecture & Mongoose Integration.</b></summary>
  
  - Explored server architecture types, identifying distinct responsibilities of web, file, email, and database servers.
  - Learned cluster scalability, understanding how a single remote cluster can host multiple isolated databases.
  - Deployed a cloud cluster on MongoDB Atlas, configuring region parameters (Mumbai, India) for optimized latency.
  - Demystified the Atlas hierarchical chain: Project ➡️ Cluster ➡️ Database ➡️ Collection ➡️ Document ➡️ Actual Data.
  - Connected the backend application to MongoDB Atlas via secure connection strings (MONGO_URI) using Mongoose ODM.
  - Reinforced previous session's learning through hands-on practice.
    
</details>

<details>
<summary><b>📅 Day 7: Mongoose Schemas, Models & Database CRUD Operations.</b></summary>

- Understood Mongoose Schemas and Models to define structured data blueprints.
- Refactored project architecture by creating dedicated `config/` (for DB connection) and `models/` folders.
- Secured connection strings and sensitive data using environment variables (`.env`).
- Cleaned up `app.js` by separating database logic into modular, readable files.
- Practiced core Mongoose CRUD methods including `Model.create()`, `findOne()`, `findOneAndUpdate()`, and `findByIdAndDelete()`.

</details>


