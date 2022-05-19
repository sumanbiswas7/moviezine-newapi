CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR (50) NOT NULL,
    user_email VARCHAR (255) UNIQUE,
    user_password VARCHAR (255),
    user_country VARCHAR(50),
    user_profile TEXT
);

CREATE TABLE movies (
    movie_id BIGSERIAL PRIMARY KEY NOT NULL,
    movie_name VARCHAR (50) NOT NULL,
    movie_director VARCHAR (50) NOT NULL,
    movie_release INT NOT NULL,
    movie_image TEXT,
    movie_description TEXT,
    movie_type VARCHAR(50),
    movie_rating FLOAT,
    movie_casts VARCHAR(100),
    movie_like_count INT,
    movie_comment_count INT,
    movie_fk INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (movie_fk) REFERENCES users(user_id)
);

CREATE TABLE likes (
    like_id BIGSERIAL PRIMARY KEY NOT NULL,
    like_movie_fk INT NOT NULL,
    like_user_fk INT NOT NULL,
    like_timestamp VARCHAR(100) NOT NULL,
    CONSTRAINT fk_like_post FOREIGN KEY (like_movie_fk) REFERENCES movies(movie_id),
    CONSTRAINT fk_like_user FOREIGN KEY (like_user_fk) REFERENCES users(user_id)
);

CREATE TABLE comments (
    comment_id BIGSERIAL PRIMARY KEY NOT NULL,
    comment_movie_fk INT NOT NULL,
    comment_user_fk INT NOT NULL,
    comment_text VARCHAR(100) NOT NULL,
    comment_timestamp VARCHAR(100) NOT NULL,
    CONSTRAINT fk_comment_post FOREIGN KEY (comment_movie_fk) REFERENCES movies(movie_id),
    CONSTRAINT fk_comment_user FOREIGN KEY (comment_user_fk) REFERENCES users(user_id)
);

-- \i 'C:/Projects/moviezine/new-api/create-tables.sql'