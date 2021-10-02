const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Student = sequelize.define('student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    middleName: { type: DataTypes.STRING, },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true },
    //   pass: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'STUDENT' },
})

const Teacher = sequelize.define('teacher', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    middleName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    //  groups: {type: DataTypes.STRING,},
    department: { type: DataTypes.STRING, },
    faculty: { type: DataTypes.STRING, },
    institute: { type: DataTypes.STRING, },
    email: { type: DataTypes.STRING, unique: true, },
    role: { type: DataTypes.STRING, defaultValue: 'TEACHER' },
    position: { type: DataTypes.STRING, unique: true, },
})

const Group = sequelize.define('group', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groupName: { type: DataTypes.STRING, unique: true, allowNull: true },
    groupLeader: { type: DataTypes.STRING, unique: true, },
    department: { type: DataTypes.STRING, },
    faculty: { type: DataTypes.STRING, },
    institute: { type: DataTypes.STRING, },
})

const RollCall = sequelize.define('rollCall', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
 //  groupId: { type: DataTypes.INTEGER, },
    date: { type: DataTypes.STRING, },
    time: { type: DataTypes.STRING, },
    lessonNamber: { type: DataTypes.INTEGER, }, 
})

Student_RollCall = sequelize.define('student_rollCall', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})
Student_Teacher = sequelize.define('student_teacher', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})
Teacher_Group = sequelize.define('teacher_group', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})
 
Teacher.hasMany(RollCall)  
RollCall.belongsTo(Teacher)

Group.hasMany(Student)
Student.belongsTo(Group)

Group.hasMany(RollCall)
RollCall.belongsTo(Group)  

Student.belongsToMany(RollCall, { through: Student_RollCall })
RollCall.belongsToMany(Student, { through: Student_RollCall })
Student.belongsToMany(Teacher, { through: Student_Teacher })
Teacher.belongsToMany(Student, { through: Student_Teacher })
Teacher.belongsToMany(Group, { through: Teacher_Group })
Group.belongsToMany(Teacher, { through: Teacher_Group })

module.exports = {
    Student,
    Teacher,
    Group,
    RollCall,
}