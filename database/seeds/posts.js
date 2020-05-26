
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: "I'm really salty >:(", post: "I'm just salty"},
        {title: "This made me mad", post: "grrrr"},
        {title: "I'm gonna log off this is why", post: "Bla Bla Bla Bla Bla "},
      ]);
    });
};
