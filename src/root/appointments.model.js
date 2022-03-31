module.exports = (sequelize, Sequelize) =>{
    const Appointments = sequelize.defint("tutorial",{
        Title: {
            type: Sequelize.String
        },
        description: {
            type: Sequelize.String
        },
        published: {
            type: Sequelize.Boolean
        }
    });
    return Appointments;
};