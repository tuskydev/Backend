
exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
        users.increments();

        users.string("first_name", 255).notNullable()
        users.string("last_name", 255).notNullable()
        users.string("username", 255).notNullable().unique()
        users.string("password", 255).notNullable()
    })
    .createTable("posts", posts => {
        posts.increments();

        posts.string("title", 255).notNullable()
        posts.string("post", 2000).notNullable()
    })
    .createTable("users_posts", users_posts => {
        users_posts.increments();

        users_posts.integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT")

        users_posts.integer("posts_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("posts")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT")
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users_posts")
  .dropTableIfExists("posts")
  .dropTableIfExists("users")
};
