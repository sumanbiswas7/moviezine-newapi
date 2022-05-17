CREATE TABLE movies (
    movie_id BIGSERIAL PRIMARY KEY NOT NULL,
    movie_name VARCHAR (70) NOT NULL,
    movie_director VARCHAR (50) NOT NULL,
    movie_release INT NOT NULL,
    movie_image TEXT,
    movie_description TEXT,
    movie_type VARCHAR(50),
    movie_cast VARCHAR(100)
);

CREATE TABLE posts (
    post_id BIGSERIAL PRIMARY KEY NOT NULL,
    post_url TEXT,
    post_caption VARCHAR (255),
    post_timestamp TIMESTAMP NOT NULL,
    post_fk INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (post_fk) REFERENCES users(user_id)
);

CREATE TABLE likes (
    like_id BIGSERIAL PRIMARY KEY NOT NULL,
    like_fk INT NOT NULL,
    like_by VARCHAR(255),
    like_timestamp TIMESTAMP NOT NULL,
    CONSTRAINT fk_like_posts FOREIGN KEY (like_fk) REFERENCES posts(post_id)
);

CREATE TABLE comments (
    comment_id BIGSERIAL PRIMARY KEY NOT NULL,
    comment_fk INT NOT NULL,
    comment_by VARCHAR(255),
    comment_text VARCHAR(255),
    comment_timestamp TIMESTAMP NOT NULL,
    CONSTRAINT fk_comment_posts FOREIGN KEY (comment_fk) REFERENCES posts(post_id)
);

-- \i 'C:/Projects/moviezine/new-api/create-tables.sql'
INSERT INTO
    movies (movie_name, movie_director, movie_release)
VALUES
    ('Intersteller', 'Christopher Nolan', 2012);