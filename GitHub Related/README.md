# TO2Assignment

Thank you for the opportunity! I am pleased to present my home assignment for Thing Or Two.

# Required installations:

1. npm install

2. npm install mysql2

3. npm install express

4. npm install fs

5. npm install path

6. npm install cors

And that's it! (I hope)

# Instructions:

1. Setting up the SQL Connection:
   
   To Set up the SQL Connection please create a connection with the following credentials:
   
   host: '127.0.0.1',
   
   port: 3306,
   
   user: 'OrSN',
   
   password: '', (No Password)
   
   database: 'SongsDB'

   Alternatively, modify Backend/Entities/DBConfig.js with your credentials.


2. Run main:
   
   The main is located in the following path: Backend/Main.js. It is filled with console messages to help you understand what is happening. It orchestrates the backend side of the system;
   
   2.1. It reads the songs file stored at Backend/Model/F-S Test - T02 - 2023 - Song_list.csv
   
   2.2. It runs the Database related tasks:
   
    2.2.1. Connecting to the Database.
   
    2.2.2. Creating the DB if not exists.
   
    2.2.3. Creating a table if not exists.
   
    2.2.4. Adding songs to the table if they weren't already added
   
   2.3. It runs the server on port 3,000.


3. Once the server is running, you can start the Frontend side by doing the following:
   
   3.1. Change the terminal path to Frontend/view
   
   3.2. Run the following command: npm start
   
    3.2.1. If prompt to use a different port, please press yes.


    
