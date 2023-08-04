USE hr_app_db;

CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role ENUM('ADMIN','HR_MANAGEMENT','INVENTORY_MANAGEMENT','PERSONNEL') NOT NULL
);

CREATE TABLE personnel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    birth_date VARCHAR(50) NOT NULL,
    marital_status VARCHAR(50) NOT NULL,
    tckn VARCHAR(50) NOT NULL,
    graduation_status ENUM('UNDER_GRADUATE','ASSOCIATE_DEGREE','POST_GRADUATE','DOCTORATE'),
    department ENUM('SOFTWARE_DEVELOPMENT','RESEARCH_DEVELOPMENT') NOT NULL,
    job ENUM('SOFTWARE_DEVELOPER','ASSISTANT_DIRECTOR','DIRECTOR') NOT NULL,
    is_working VARCHAR(50) NOT NULL,
    other_details TEXT
);

CREATE TABLE inventory(
	id INT AUTO_INCREMENT PRIMARY KEY,
	inventory_type ENUM('MOUSE','COMPUTER','DISK','CAR') NOT NULL,
    entering_date VARCHAR(50),
    brand VARCHAR(50),
    model VARCHAR(50),
    serial_no VARCHAR(50),
    inventory_status ENUM('IN_STAFF','IN_THE_OFFICE','IN_STORAGE') 
);



INSERT INTO users (username, password, role)
VALUES('admin','test123','ADMIN');

INSERT INTO users (username, password, role)
VALUES('hr_test','test123','HR_MANAGEMENT');

INSERT INTO users (username, password, role)
VALUES('inventory_test','test123','INVENTORY_MANAGEMENT');

INSERT INTO users (username, password, role)
VALUES('personnel_test','test123','PERSONNEL');




