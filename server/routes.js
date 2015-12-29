var DocumentModel = require('./models/document');
var OriginalModel = require('./models/original');
var VersionModel = require('./models/version');

module.exports = function(server) {
  server.post('/documents', function(request, response) {
    var original = new OriginalModel(request.body);
    original.save();

    DocumentModel.findOne({ name: original.objectName }, function(error, document) {
      if (!document) {
        document = new DocumentModel({ name: original.objectName });
        document.save();
      }
      var version = new VersionModel({ document: document._id, properties: original._id });
      version.save(function(error) {
        document.versions.push(version._id);
        document.save();
      });
    });
    response.sendStatus(204);    
  });
  server.get('/documents', function(request, response) {
    DocumentModel.find({}, function(error, documents) {
      response.json({ documents: documents });
    });
  });
  server.get('/versions/:version_id', function(request, response) {
    VersionModel
      .findOne({ _id: request.params.version_id })
      .populate('properties', '-_id -__v')
      .exec(function(error, version) {
        response.json({ version: version });
    });
  });
  server.get('/versions', function(request, response) {
    VersionModel
      .find({})
      .populate('properties', '-_id -__v')
      .exec(function(error, versions) {
        response.json({ versions: versions });
    });
  });
  server.get('*', function(request, response) {
    response.sendFile('index.html', { root: __dirname + '/../dist/' });
  });
}
