const getStudents = "SELECT * FROM student";
const getStudentById = "SELECT * FROM student WHERE student_id = $1";
const checkIfEmailExists = "SELECT student_id FROM student WHERE email = $1";
const addStudent = "INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *";
const deleteStudent = "DELETE FROM student WHERE student_id = $1 RETURNING *";
const updateStudent = "UPDATE student SET name = $2 WHERE student_id = $1 RETURNING *";

module.exports = {
    getStudents,
    getStudentById,
    checkIfEmailExists,
    addStudent,
    deleteStudent,
    updateStudent,
};