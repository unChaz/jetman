let usersResource = new Resource();

// /users
usersResource.get('', function(req, res) {
  return res.send(200, { data: 'users list'});
});

// /users/:id
usersResource.get(':id', function(req, res) {
  return res.send(200, { data: 'a user'});
});
