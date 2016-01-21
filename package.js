Package.describe({
  name: 'jss:spinner',
  version: '0.0.2',
  summary: 'Simple spinner package',
  git: 'https://github.com/JSSolutions/meteor-spinner',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('templating', 'client');
  api.addFiles('lib/spinner.gif', 'client', {
    isAsset: true
  });
  api.addFiles([
    'lib/spinner.css',
    'lib/spinner.html'
  ], 'client');
});
