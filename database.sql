CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   status ENUM('active', 'inactive') NOT NULL,
   dob DATE NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE age_pensions (
   id INT AUTO_INCREMENT PRIMARY KEY,
   age INT NOT NULL,
   pension_qty INT NOT NULL
);

INSERT INTO age_pensions (age, pension_qty)
VALUES
    (16, 0),
    (17, 0),
    (18, 0),
    (19, 0),
    (20, 1),
    (21, 1),
    (22, 1),
    (23, 1),
    (24, 1),
    (25, 2),
    (26, 2),
    (27, 2),
    (28, 2),
    (29, 2),
    (30, 3),
    (31, 3),
    (32, 3),
    (33, 3),
    (34, 3),
    (35, 4),
    (36, 4),
    (37, 4),
    (38, 4),
    (39, 4),
    (40, 5),
    (41, 5),
    (42, 5),
    (43, 5),
    (44, 5),
    (45, 6),
    (46, 6),
    (47, 6),
    (48, 6),
    (49, 6),
    (50, 7),
    (51, 7),
    (52, 7),
    (53, 7),
    (54, 7),
    (55, 8),
    (56, 8),
    (57, 8),
    (58, 8),
    (59, 8),
    (60, 9),
    (61, 9),
    (62, 9),
    (63, 9),
    (64, 9),
    (65, 10),
    (66, 10),
    (67, 10),
    (68, 10),
    (69, 10),
    (70, 11),
    (71, 11),
    (72, 11),
    (73, 11),
    (74, 11),
    (75, 12);


INSERT INTO `users` (`id`, `name`, `email`, `status`, `dob`, `created_at`, `updated_at`) VALUES
(1, 'Jhon Smith', 'jhon@email.com', 'active', '2004-01-16', '2024-12-10 10:02:28', '2024-12-13 11:18:25'),
(2, 'James Brian', 'james@email.com', 'active', '1998-12-04', '2024-12-10 14:52:47', '2024-12-13 11:19:16'),
(3, 'Mary Conor', 'mary@email.com', 'active', '1994-10-15', '2024-12-10 14:53:54', '2024-12-13 11:20:54'),
(4, 'Margareth Plum', 'margareth@email.com', 'active', '1988-08-26', '2024-12-10 14:56:21', '2024-12-13 11:21:43'),
(5, 'Pedo Pony', 'pedopony@mau.com', 'active', '1983-12-07', '2024-12-12 15:03:53', '2024-12-13 11:22:20'),
(7, 'Mario Brothers', 'mario@email.com', 'active', '1978-12-08', '2024-12-13 11:23:38', '2024-12-13 11:23:38');