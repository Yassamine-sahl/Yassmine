'use strict';
const fake = require("faker")

const users=[...Array(20)].map((user)=>({

  username :fake.internet.userName(),
  email:fake.internet.email(),
  password :fake.internet.password(8),
  role :fake.helpers.randomize(['author','admin','guest']),
  createdAt :new Date(),
  updatedAt :new Date()
  
})
)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
     
    
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
