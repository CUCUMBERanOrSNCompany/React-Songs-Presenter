# React Songs Presenter


<img width="1440" alt="Screenshot 2023-08-19 at 15 07 24" src="https://github.com/CUCUMBERanOrSNCompany/TO2Assignment/assets/70776104/23eb3486-85f5-4ca1-ab53-201dada21bda">







This project was originally my assignment for a Full-Stack Position (React/JS/SQL). It qualified me to a final interview at the company.

The project consists of a:
1. File reader
2. SQL Database that stores the content of the file in a table.
3. A Server that sends HTTP GET requests to an API and present the SQL Table in a web page.


# Required installations:

1. npm install mysql2

2. npm install express

3. npm install fs

4. npm install path

5. npm install cors

And that's it! (I hope)

# Instructions:

1. Setting up the SQL Connection:
   
   To Set up the SQL Connection please create a connection with the following credentials:
   
   host: '127.0.0.1',
   
   port: 3306,
   
   user: 'OrSN',
   
   password: '', (No Password)

   Alternatively, modify _Backend/Entities/DBConfig.js_ with your credentials.


2. Run main:
   
   The main is located in the following path: _Backend/Main.js_. It is filled with console messages to help you understand what is happening. It orchestrates the backend side of the system;
   
   2.1. It reads the songs file stored at _Backend/Model/F-S Test - T02 - 2023 - Song_list.csv_
   
   2.2. It runs the Database related tasks:
   
    2.2.1. Connecting to the Database.
   
    2.2.2. Creating the DB **SongsDB** if not exists.
   
    2.2.3. Creating the table **songs** if not exists.
   
    2.2.4. Adding songs to the table if they weren't already added
   
   2.3. It runs the server on port 3,000.


3. Once the server is running, you can start the Frontend side by doing the following:

   
4. Change the terminal path to _Frontend/view_

   
5. Run the following command: _npm start_
   
    5.1. If prompt to use a different port, please press _yes_.



Please feel free to reach out with any questions!
