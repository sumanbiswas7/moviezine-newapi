-- INSERT INTO
--     users (
--         user_name,
--         user_email,
--         user_password,
--         user_profile
--     )
-- VALUES
--     (
--         'Suman Biswas',
--         'suman@email.com',
--         'itssuman69',
--         'https://picsum.photos/300'
--     );
-- INSERT INTO
--     users (
--         user_name,
--         user_email,
--         user_password,
--         user_profile
--     )
-- VALUES
--     (
--         'Jacob Saminathan',
--         'jcsm@email.com',
--         'itsjackobppp',
--         'https://picsum.photos/300'
--     );
INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk
    )
VALUES
    ('Intersteller', 'Christopher Nolan', 2012, 2);

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk
    )
VALUES
    ('Fight Club', 'Diogo Jota', 2010, 1);

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk
    )
VALUES
    ('La La Land', 'Spike Lee', 2019, 1);

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk
    )
VALUES
    ('The Matrix', 'Howard Hawks', 2004, 2);

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk
    )
VALUES
    (
        'Django Unchained',
        'Quentien Tarantino',
        2015,
        2
    );

-- \i 'C:/Projects/moviezine/new-api/insert-data.sql'