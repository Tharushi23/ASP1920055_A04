CREATE DATABASE  Resevation_details;
USE Resevation_details;

CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone VARCHAR(10) NOT NULL
);

 
CREATE DATABASE Project_details;
USE Project_details;

CREATE TABLE projects (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    Image VARCHAR(255)
);
