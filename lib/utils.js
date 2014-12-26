var fs = require('fs-extra');
var path = require('path');
var xmlParser = require('node-xml-lite');

module.exports = {
  parseConfigXml: function() {
    return xmlParser.parseFileSync('config.xml');
  },
      
  getAppName: function(configXml) {
    return (configXml || this.parseConfigXml()).childs.filter(function(_) { return _.name == 'name'; }).map(function(_) { return _.childs[0]; })[0];
  },
      
  getAppPreferences: function(configXml) {
    var preferences = {};
        
    (configXml || this.parseConfigXml()).childs.filter(function(_) { return _.name == 'preference'; }).forEach(function(_) {
      preferences[_.attrib.name] = _.attrib.value;
    });
        
    return preferences;
  },
 
  copyGraphics: function(graphicsDir, resourcesDir, graphicsMap) {
    for (var type in graphicsMap) {
      for (var dest in graphicsMap[type]) {
        var src = graphicsMap[type][dest];
        var srcPath = path.join(graphicsDir, type, src) + '.png';
        var destPath = path.join(resourcesDir, dest) + '.png';
          
        if (fs.existsSync(srcPath)) {
          console.info('Copying "' + srcPath + '" to "' + destPath + '"');
          fs.copySync(srcPath, destPath);
        }
      }
    }
  },

  appendAndroidSplashName: function(androidSplashName, androidSplashGraphicsMap) {
    var newMap = {};
    
    for (var key in androidSplashGraphicsMap) {
      newMap[key + androidSplashName] = androidSplashGraphicsMap[key];
    }
    
    return newMap;
  },
  
  getAndroidSplashName: function(configXml, defaultName) {
    return this.getAppPreferences(configXml).SplashScreen || defaultName;
  }
};