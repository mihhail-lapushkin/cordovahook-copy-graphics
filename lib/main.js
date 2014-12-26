var path = require('path');
var _ = require('./utils');

module.exports = function(mappings) {
  var configXml = _.parseConfigXml();
  var appName = _.getAppName(configXml);
  var androidSplashName = _.getAndroidSplashName(configXml, 'screen');

  process.env.CORDOVA_PLATFORMS.split(',').forEach(function(platform) {
    console.info('\n> Copying graphics to "' + platform + '" platform\n');
    
    var platformGraphicsDir = path.join('graphics', platform);
    var platformDir = path.join('platforms', platform);
    
    switch (platform) {
      case 'android':
        _.copyGraphics(platformGraphicsDir, path.join(platformDir, 'res'), {
          icons: mappings.android.icons,
          splashes: _.appendAndroidSplashName(androidSplashName, mappings.android.splashes)
        });
        
        break;
      case 'ios':
        _.copyGraphics(platformGraphicsDir, path.join(platformDir, appName, 'Resources'), mappings.ios);
        
        break;
    }
  });
};