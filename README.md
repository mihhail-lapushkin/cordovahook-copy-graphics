# cordovahook-copy-graphics

![](https://badge.fury.io/js/cordovahook-copy-graphics.svg)&nbsp;&nbsp;
![](https://david-dm.org/mihhail-lapushkin/cordovahook-copy-graphics.png)

Manually copying icons and splashes to their places for each platform can be a pain. Doing it all over again when something changes is a constant headache, which this hook aims to treat.

## How to install?
`npm install cordovahook-copy-graphics --save`

## How to use inside hooks?
```
#!/usr/bin/env node
require('cordovahook-copy-graphics');
```

## What maps to what?
Take a look over [here](https://github.com/mihhail-lapushkin/cordovahook-copy-graphics/blob/master/index.js). Graphics are named after their sizes in pixels.

## What platforms are supported?
Currently, supports only `android` and `ios` platforms.

## Example, please!
Refer to [howtouse](https://github.com/mihhail-lapushkin/cordovahook-copy-graphics/tree/master/howtouse) folder to get an understanding of how to setup this hook in your project.

## Release History
 * **0.1.0** / 2014-12-26
   * First version.