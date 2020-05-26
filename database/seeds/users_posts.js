
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_posts').insert([
        {user_id: 1, posts_id: 1},
        {user_id: 1, posts_id: 2},
        {user_id: 2, posts_id: 3},

      ]);
    });
};
