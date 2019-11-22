CREATE TABLE life_goals (
list_id SERIAL PRIMARY KEY,
list_content VARCHAR
);

CREATE TABLE dreamers(
dreamer_id SERIAL PRIMARY KEY,
email VARCHAR(30),
user_name VARCHAR(30),
profile_img TEXT
);

CREATE TABLE dreamers_hash (
hash_id SERIAL PRIMARY KEY,
hash TEXT,
dreamer_id INT REFERENCES dreamers(dreamer_id)
);