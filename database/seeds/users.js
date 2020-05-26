
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Robin', last_name: "Williams", username: "RW777", password: "abc123"},
        {first_name: 'Bat', last_name: "Man", username: "clarkkent", password: "secretmystery"},
      ]);
    });
};
