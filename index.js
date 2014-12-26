require('./lib/main')({
  android: {
    icons: {
      'drawable-ldpi/icon':   '36',
      'drawable-mdpi/icon':   '48',
      'drawable-hdpi/icon':   '72',
      'drawable-xhdpi/icon':  '96',
      'drawable/icon':        '96',
    },
    
    splashes: {
      'drawable-land-ldpi/':  '320x200',
      'drawable-land-mdpi/':  '480x320',
      'drawable-land-hdpi/':  '800x480',
      'drawable-land-xhdpi/': '1280x720',
      'drawable-port-ldpi/':  '200x320',
      'drawable-port-mdpi/':  '320x480',
      'drawable-port-hdpi/':  '480x800',
      'drawable-port-xhdpi/': '720x1280',
    }
  },
  
  ios: {
    icons: {
      'icons/icon-small':     '29',
      'icons/icon-40':        '40',
      'icons/icon-50':        '50',
      'icons/icon':           '57',
      'icons/icon-small@2x':  '58',
      'icons/icon-60':        '60',
      'icons/icon-72':        '72',
      'icons/icon-76':        '76',
      'icons/icon-40@2x':     '80',
      'icons/icon-50@2x':     '100',
      'icons/icon-72@2x':     '114',
      'icons/icon-60@2x':     '120',
      'icons/icon@2x':        '144',
      'icons/icon-76@2x':     '152',
      'icons/icon-60@3x':     '180',
    },
    
    splashes: {
      'splash/Default~iphone':            '320x480',
      'splash/Default@2x~iphone':         '640x960',
      'splash/Default-568h@2x~iphone':    '640x1136',
      
      'splash/Default-Landscape~ipad':    '1024x768',
      'splash/Default-Landscape@2x~ipad': '2048x1536',
      'splash/Default-Portrait~ipad':     '768x1024',
      'splash/Default-Portrait@2x~ipad':  '1536x2048',
      
      'splash/Default-667h':              '750x1334',
      'splash/Default-736h':              '1242x2208',
      'splash/Default-Landscape-736h':    '2208x1242',
    }
  }
});