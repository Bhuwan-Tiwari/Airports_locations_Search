'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [
      {
       
        country_code: 'AF',
        region_name:'Helmand',
        iata: 'BST',
        icao: 'OABT',
        airport: 'Bost Airport',
        latitude: 31.5597,
        longitude: 64.365,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       
        country_code: 'AF',
        region_name:'Helmand',
        iata: 'DWR',
        icao: 'OADY',
        airport: 'Dwyer Airport',
        latitude: 31,
        longitude: 64,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       
        country_code: 'AF',
        region_name:'Helmand',
        iata: 'OAZ',
        icao: 'OAZI',
        airport: 'Camp Bastion Air Base',
        latitude: 31.8638,
        longitude: 64.2246,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       
        country_code: 'AF',
        region_name:'Maya',
        iata: 'HEA',
        icao: 'OAHR',
        airport: 'Herat International Airport',
        latitude: 34.21,
        longitude: 62.2283,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
       
        country_code: 'AF',
        region_name:'Herat',
        iata: 'OAH',
        icao: 'OASD',
        airport: 'Shindand Air Base',
        latitude: 33.3913,
        longitude: 62.261,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

