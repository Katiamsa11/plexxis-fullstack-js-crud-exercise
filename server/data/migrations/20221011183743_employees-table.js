/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('employees',tbl => {
    tbl.increments("id").primary();
    tbl.text('name',128).notNullable();
    tbl.text('code',128).notNullable();
    tbl.text('profession',128).notNullable();
    tbl.text('city',128).notNullable();
    tbl.text('color',128).notNullable();
    tbl.text('branch',128).notNullable();
    tbl.boolean('assigned').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('employees');
  
};
