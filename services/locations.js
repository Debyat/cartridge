const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getLocations(){
    const rows = await db.query(
        `SELECT * FROM locations`
    );
    const data = helper.emptyRow(rows);
  
    return {
      data,
    }
  }
  
  module.exports = {
    getLocations
  }