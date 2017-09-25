// Modules
var childProcess = require('../../lib/child-process');

// Public
module.exports = cache;

// Implementation
function cache(dependency) {
  return childProcess.exec('npm cache --scope=' + dependency.getScope() + ' add ' + dependency.graph.resolved, {encoding: 'utf8'})
    .then(onSuccess, onError);

  function onSuccess() {
    return dependency;
  }

  function onError() {
    throw new Error('! failed to download ' + dependency.getId());
  }
}
