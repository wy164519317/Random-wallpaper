function _0x3853(){const _0x411f43=['1447200RXQHcZ','update-downloaded','downloading','141GEvhEI','url','download','update-available','send','已下载\x20','toString','没有可用更新','exports','checkUpdate','checkForUpdates','ee-core/utils/is','noAvailable','235140QOxSLf','download-progress','116LIlRwj','downloaded','substring','create','stringify','toFixed','下载完成','有可用更新','[addon:autoUpdater]\x20load','electron-updater','9930qHHmFe','getValue','percent','581600PjPlSs','getMainWindow','electron','setFeedURL','length','sendStatusToWindow','error','force','windows','526183ngtDBB','status','ee-core/log','31076NKNLDc','webContents','[addon:autoUpdater]\x20current\x20version:\x20','total','ee-core/electron/window','macOS','options','[class\x20AutoUpdaterAddon]','transferred','[addon:autoUpdater]\x20progress:\x20','quitAndInstall','update-not-available','bytesChange','linux','desc','available','getVersion','checking-for-update','addons.autoUpdater','2997695CCsXHx','[addon:autoUpdater]\x20setFeedURL\x20error\x20:\x20','downloadUpdate','16NvETkm','app.updater','info','ee-core/config','autoDownload','indexOf'];_0x3853=function(){return _0x411f43;};return _0x3853();}const _0x5ef2a6=_0x55ee;(function(_0x57b10e,_0x218128){const _0x5db40f=_0x55ee,_0x2af02b=_0x57b10e();while(!![]){try{const _0x27edd8=-parseInt(_0x5db40f(0x228))/0x1*(-parseInt(_0x5db40f(0x21e))/0x2)+parseInt(_0x5db40f(0x20f))/0x3*(parseInt(_0x5db40f(0x237))/0x4)+-parseInt(_0x5db40f(0x203))/0x5+-parseInt(_0x5db40f(0x21c))/0x6+parseInt(_0x5db40f(0x234))/0x7*(parseInt(_0x5db40f(0x206))/0x8)+-parseInt(_0x5db40f(0x20c))/0x9+parseInt(_0x5db40f(0x22b))/0xa;if(_0x27edd8===_0x218128)break;else _0x2af02b['push'](_0x2af02b['shift']());}catch(_0x5c6d82){_0x2af02b['push'](_0x2af02b['shift']());}}}(_0x3853,0x55764));const {app:electronApp}=require(_0x5ef2a6(0x22d)),{autoUpdater}=require(_0x5ef2a6(0x227)),is=require(_0x5ef2a6(0x21a)),Log=require(_0x5ef2a6(0x236)),Conf=require(_0x5ef2a6(0x209)),CoreWindow=require(_0x5ef2a6(0x1f4));function _0x55ee(_0x5ce374,_0x2f0cc2){const _0x385356=_0x3853();return _0x55ee=function(_0x55eeb7,_0x5163b2){_0x55eeb7=_0x55eeb7-0x1f4;let _0x454303=_0x385356[_0x55eeb7];return _0x454303;},_0x55ee(_0x5ce374,_0x2f0cc2);}class AutoUpdaterAddon{constructor(){}[_0x5ef2a6(0x221)](){const _0x5b2d62=_0x5ef2a6;Log[_0x5b2d62(0x208)](_0x5b2d62(0x226));const _0x2578f3=Conf[_0x5b2d62(0x229)](_0x5b2d62(0x202));if(is[_0x5b2d62(0x233)]()&&_0x2578f3[_0x5b2d62(0x233)]||is[_0x5b2d62(0x1f5)]()&&_0x2578f3[_0x5b2d62(0x1f5)]||is[_0x5b2d62(0x1fd)]()&&_0x2578f3[_0x5b2d62(0x1fd)]){}else return;_0x2578f3[_0x5b2d62(0x232)]&&this[_0x5b2d62(0x218)]();const _0x49e1c6={'error':-0x1,'available':0x1,'noAvailable':0x2,'downloading':0x3,'downloaded':0x4},_0xffad1d=electronApp[_0x5b2d62(0x200)]();Log[_0x5b2d62(0x208)](_0x5b2d62(0x239),_0xffad1d);let _0x239faa=_0x2578f3[_0x5b2d62(0x1f6)][_0x5b2d62(0x210)],_0x428915=_0x239faa[_0x5b2d62(0x220)](_0x239faa[_0x5b2d62(0x22f)]-0x1);_0x239faa=_0x428915==='/'?_0x239faa:_0x239faa+'/',_0x2578f3[_0x5b2d62(0x1f6)][_0x5b2d62(0x210)]=_0x239faa,autoUpdater[_0x5b2d62(0x20a)]=_0x2578f3[_0x5b2d62(0x232)]?!![]:![];try{autoUpdater[_0x5b2d62(0x22e)](_0x2578f3[_0x5b2d62(0x1f6)]);}catch(_0x487628){Log[_0x5b2d62(0x231)](_0x5b2d62(0x204),_0x487628);}autoUpdater['on'](_0x5b2d62(0x201),()=>{}),autoUpdater['on'](_0x5b2d62(0x212),_0x6e55de=>{const _0x5c1fce=_0x5b2d62;_0x6e55de[_0x5c1fce(0x235)]=_0x49e1c6[_0x5c1fce(0x1ff)],_0x6e55de[_0x5c1fce(0x1fe)]=_0x5c1fce(0x225),this[_0x5c1fce(0x230)](_0x6e55de);}),autoUpdater['on'](_0x5b2d62(0x1fb),_0x20c09c=>{const _0x12e75e=_0x5b2d62;_0x20c09c[_0x12e75e(0x235)]=_0x49e1c6[_0x12e75e(0x21b)],_0x20c09c[_0x12e75e(0x1fe)]=_0x12e75e(0x216),this[_0x12e75e(0x230)](_0x20c09c);}),autoUpdater['on'](_0x5b2d62(0x231),_0x3bd47e=>{const _0x443423=_0x5b2d62;let _0x4ec4d5={'status':_0x49e1c6[_0x443423(0x231)],'desc':_0x3bd47e};this[_0x443423(0x230)](_0x4ec4d5);}),autoUpdater['on'](_0x5b2d62(0x21d),_0x2b328c=>{const _0x438e82=_0x5b2d62;let _0x10fe71=parseInt(_0x2b328c[_0x438e82(0x22a)]),_0x2d8049=this[_0x438e82(0x1fc)](_0x2b328c[_0x438e82(0x23a)]),_0x5e8b64=this[_0x438e82(0x1fc)](_0x2b328c[_0x438e82(0x1f8)]),_0x4b9729=_0x438e82(0x214)+_0x10fe71+'%';_0x4b9729=_0x4b9729+'\x20('+_0x5e8b64+'/'+_0x2d8049+')';let _0x298eee={'status':_0x49e1c6[_0x438e82(0x20e)],'desc':_0x4b9729,'percentNumber':_0x10fe71,'totalSize':_0x2d8049,'transferredSize':_0x5e8b64};Log[_0x438e82(0x208)](_0x438e82(0x1f9),_0x4b9729),this[_0x438e82(0x230)](_0x298eee);}),autoUpdater['on'](_0x5b2d62(0x20d),_0xb5cfc2=>{const _0x12608a=_0x5b2d62;_0xb5cfc2[_0x12608a(0x235)]=_0x49e1c6[_0x12608a(0x21f)],_0xb5cfc2[_0x12608a(0x1fe)]=_0x12608a(0x224),this[_0x12608a(0x230)](_0xb5cfc2),autoUpdater[_0x12608a(0x1fa)]();});}[_0x5ef2a6(0x218)](){const _0x57af1c=_0x5ef2a6;autoUpdater[_0x57af1c(0x219)]();}[_0x5ef2a6(0x211)](){const _0x1d2d33=_0x5ef2a6;autoUpdater[_0x1d2d33(0x205)]();}[_0x5ef2a6(0x230)](_0x20343a={}){const _0x565ba0=_0x5ef2a6,_0x5e91a2=JSON[_0x565ba0(0x222)](_0x20343a),_0x4c2247=_0x565ba0(0x207),_0x4a4d9d=CoreWindow[_0x565ba0(0x22c)]();_0x4a4d9d[_0x565ba0(0x238)][_0x565ba0(0x213)](_0x4c2247,_0x5e91a2);}[_0x5ef2a6(0x1fc)](_0x3e9f71){const _0x5e76d2=_0x5ef2a6;let _0x32f00c='';if(_0x3e9f71<0.1*0x400)_0x32f00c=_0x3e9f71[_0x5e76d2(0x223)](0x2)+'B';else{if(_0x3e9f71<0.1*0x400*0x400)_0x32f00c=(_0x3e9f71/0x400)[_0x5e76d2(0x223)](0x2)+'KB';else _0x3e9f71<0.1*0x400*0x400*0x400?_0x32f00c=(_0x3e9f71/(0x400*0x400))[_0x5e76d2(0x223)](0x2)+'MB':_0x32f00c=(_0x3e9f71/(0x400*0x400*0x400))[_0x5e76d2(0x223)](0x2)+'GB';}let _0x41f85c=_0x32f00c+'',_0x5b53cf=_0x41f85c[_0x5e76d2(0x20b)]('.'),_0x3bb6d8=_0x41f85c[_0x5e76d2(0x220)](_0x5b53cf+0x1,_0x5b53cf+0x3);if(_0x3bb6d8=='00')return _0x41f85c[_0x5e76d2(0x220)](0x0,_0x5b53cf)+_0x41f85c[_0x5e76d2(0x220)](_0x5b53cf+0x3,_0x5b53cf+0x5);return _0x32f00c;}}AutoUpdaterAddon[_0x5ef2a6(0x215)]=()=>_0x5ef2a6(0x1f7),module[_0x5ef2a6(0x217)]=AutoUpdaterAddon;