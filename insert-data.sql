INSERT INTO
    users (
        user_name,
        user_email,
        user_password,
        user_profile
    )
VALUES
    (
        'Suman Biswas',
        'suman@email.com',
        'itssuman69',
        'https://picsum.photos/300'
    );

INSERT INTO
    users (
        user_name,
        user_email,
        user_password,
        user_profile
    )
VALUES
    (
        'Jacob Saminathan',
        'jcsm@email.com',
        'itsjackobppp',
        'https://picsum.photos/300'
    );

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk,
        movie_rating,
        movie_image
    )
VALUES
    (
        'Intersteller',
        'Christopher Nolan',
        2012,
        2,
        8.5,
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB'
    );

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk,
        movie_rating,
    )
VALUES
    (
        'Fight Club',
        'Diogo Jota',
        2010,
        1,
        8.0,
    );

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk,
        movie_rating,
        movie_image
    )
VALUES
    (
        'La La Land',
        'Spike Lee',
        2019,
        1,
        8.5,
        'https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg?format=pjpg&auto=webp&optimize=high&width=850'
    );

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk,
        movie_rating
    )
VALUES
    ('The Matrix', 'Howard Hawks', 2004, 2, 8.0);

INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk,
        movie_rating
    )
VALUES
    (
        'Django Unchained',
        'Quentien Tarantino',
        2015,
        2,
        8.0
    )
INSERT INTO
    movies (
        movie_name,
        movie_director,
        movie_release,
        movie_fk,
        movie_rating
    )
VALUES
    (
        'The Good The Bad and The Ugly',
        'Client Eastwood',
        1975,
        2,
        8.5
    );

-- \i 'C:/Projects/moviezine/new-api/insert-data.sql'