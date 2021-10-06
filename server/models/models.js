const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Student = sequelize.define('student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    g_id: { type: DataTypes.STRING, },
    firstName: { type: DataTypes.STRING, allowNull: true },
    middleName: { type: DataTypes.STRING, },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true },
    //   pass: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'STUDENT' },
})

const Teacher = sequelize.define('teacher', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    g_id: { type: DataTypes.STRING, },
    firstName: { type: DataTypes.STRING, allowNull: true },
    middleName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    department: { type: DataTypes.STRING, },
    faculty: { type: DataTypes.STRING, },
    institute: { type: DataTypes.STRING, },
    email: { type: DataTypes.STRING, },
    role: { type: DataTypes.STRING, defaultValue: 'TEACHER' },
    position: { type: DataTypes.STRING, },
})
//  groups: {type: DataTypes.STRING,},
const Group = sequelize.define('group', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groupName: { type: DataTypes.STRING, unique: true, },
    groupLeader: { type: DataTypes.STRING, },
    department: { type: DataTypes.STRING, },
    faculty: { type: DataTypes.STRING, },
    institute: { type: DataTypes.STRING, },
})

const RollCall = sequelize.define('rollCall', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    creatorId: { type: DataTypes.INTEGER, },
    date: { type: DataTypes.STRING, },    
    day: { type: DataTypes.STRING, },
    startTime: { type: DataTypes.STRING, },
    endTime: { type: DataTypes.STRING, }, 
    lessonNamber: { type: DataTypes.INTEGER, },
    pass: { type: DataTypes.STRING, },
    //presentListId
})

const PresentStudent = sequelize.define('presentStudent', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rollCallId: { type: DataTypes.INTEGER, },
    studentId: { type: DataTypes.INTEGER, },
    present: { type: DataTypes.BOOLEAN, },

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

Group.hasMany(Student) 
Student.belongsTo(Group)

Group.hasMany(RollCall)
RollCall.belongsTo(Group)

RollCall.hasMany(PresentStudent)
PresentStudent.belongsTo(RollCall)

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
    PresentStudent
}