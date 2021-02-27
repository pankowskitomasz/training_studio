CREATE TABLE trainingstudio_messages(
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    message VARCHAR(250) NOT NULL,
    time DATETIME DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(id)
);
