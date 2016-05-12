let thingsResource = new Resource();

// /api/things
thingsResource.get('things', function(req, res) {
  return res.send(200, { data: 'things'});
});
