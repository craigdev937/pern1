CREATE DATABASE pern1;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE friends(
    id uuid DEFAULT uuid_generate_v4(),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    age INTEGER,
    info TEXT,
    PRIMARY KEY (id)
);


