CREATE TABLE student (
	student_id INTEGER GENERATED ALWAYS AS IDENTITY,
	name VARCHAR(255),
	email VARCHAR(255),
	age INT,
	dob DATE,
	
	CONSTRAINT PK_student_student_id PRIMARY KEY (student_id)
);

INSERT INTO student (
    name, email, age, dob
) VALUES ('John', 'John@gmail.com', 24, '1997-09-09'),
('Oxi', 'Oxi@gmail.com', 24, '1997-10-10');