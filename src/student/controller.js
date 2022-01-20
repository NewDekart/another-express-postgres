const pool = require("../db");
const queries = require("./queries");

const getStudents = async (_, res, next) => {

    try {

        const students = await pool.query(queries.getStudents);

        res.send(students.rows);

    } catch(e) {

        next(e);

    }

};

const getStudentById = async (req, res, next) => {

    try {

        const { id: studentId } = req.params;

        const student = await pool.query(queries.getStudentById, [ studentId ]);

        res.send(student.rows?.at(0));

    } catch(e) {

        next(e);

    }

};

const addStudent = async (req, res, next) => {

    try {

        const { name, email, age, dob } = req.body;

        // check if email exists
        const resultsWithSameEmail = await pool.query(queries.checkIfEmailExists, [ email ]);

        if (resultsWithSameEmail.rowCount > 0) {

            res.status(400).send('This email is already use');

            return;

        }

        const addStudentsResult = await pool.query(queries.addStudent, [ name, email, age, dob ]);

        res.send(addStudentsResult.rows?.at(0));

    } catch(e) {

        next(e);

    }

};

const deleteStudent = async (req, res, next) => {

    try {

        const { id: studentId } = req.params;

        const queryByStudentId = await pool.query(queries.getStudentById, [ studentId ]);

        if (queryByStudentId.rowCount === 0) {

            res.status(404).send("Student not found");

            return;

        }

        const queryDeleteStudent = await pool.query(queries.deleteStudent, [ studentId ]);

        res.send(queryDeleteStudent.rows?.at(0));

    } catch (e) {

        next(e)

    }

};

const updateStudent = async (req, res, next) => {

    try {

        const { id: studentId } = req.params;

        const { name } = req.body;

        const queryByStudentId = await pool.query(queries.getStudentById, [ studentId ]);

        if (queryByStudentId.rowCount === 0) {

            res.status(404).send("Student not found");

            return;

        }

        const queryUpdateStudent = await pool.query(queries.updateStudent, [ studentId, name ]);

        res.send(queryUpdateStudent.rows?.at(0));

    } catch (e) {

        next(e);

    }

};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent,
};