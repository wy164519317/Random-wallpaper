function _0x47a3(_0x3e302a,_0x285572){const _0x4be73c=_0x4be7();return _0x47a3=function(_0x47a32e,_0x35b2b7){_0x47a32e=_0x47a32e-0x126;let _0x286198=_0x4be73c[_0x47a32e];return _0x286198;},_0x47a3(_0x3e302a,_0x285572);}const _0x1254ac=_0x47a3;(function(_0x31c381,_0x4b72d8){const _0x2d86ce=_0x47a3,_0x24ca44=_0x31c381();while(!![]){try{const _0x4ea896=parseInt(_0x2d86ce(0x12c))/0x1*(-parseInt(_0x2d86ce(0x13e))/0x2)+parseInt(_0x2d86ce(0x131))/0x3+-parseInt(_0x2d86ce(0x150))/0x4+-parseInt(_0x2d86ce(0x151))/0x5*(-parseInt(_0x2d86ce(0x13c))/0x6)+parseInt(_0x2d86ce(0x14f))/0x7+-parseInt(_0x2d86ce(0x140))/0x8+-parseInt(_0x2d86ce(0x14a))/0x9*(parseInt(_0x2d86ce(0x137))/0xa);if(_0x4ea896===_0x4b72d8)break;else _0x24ca44['push'](_0x24ca44['shift']());}catch(_0x21dbe9){_0x24ca44['push'](_0x24ca44['shift']());}}}(_0x4be7,0x3fd52));function _0x4be7(){const _0x2ceb0a=['735960sxZZur','ee-core/log','isHotReload','ee-core/config','info','electron','hide','preventDefault','icon','create','616599Zapdid','[addon:tray]\x20load','appQuit','tray','getHomeDir','2740143TzJarf','99560UyLmtE','125IstjjA','getMainWindow','isDev','buildFromTemplate','ee-core/electron','ee-core/ee','setContextMenu','203pxbbUA','exports','show','close','closeWindow','150777RsOdAq','extra','title','path','toString','addons.tray','40ITgXwi','ee-core/electron/window','getValue','join','[class\x20TrayAddon]','77700fykPDn','ee-core/ps','1114evqbHn','setToolTip'];_0x4be7=function(){return _0x2ceb0a;};return _0x4be7();}const {Tray,Menu}=require(_0x1254ac(0x145)),path=require(_0x1254ac(0x134)),Ps=require(_0x1254ac(0x13d)),Log=require(_0x1254ac(0x141)),Electron=require(_0x1254ac(0x129)),CoreWindow=require(_0x1254ac(0x138)),Conf=require(_0x1254ac(0x143)),EE=require(_0x1254ac(0x12a));class TrayAddon{constructor(){const _0x15369b=_0x1254ac;this[_0x15369b(0x14d)]=null;}[_0x1254ac(0x149)](){const _0x4308b1=_0x1254ac;if(Ps[_0x4308b1(0x127)]()&&Ps[_0x4308b1(0x142)]())return;Log[_0x4308b1(0x144)](_0x4308b1(0x14b));const {CoreApp:_0x404f4d}=EE,_0x1ca40d=Conf[_0x4308b1(0x139)](_0x4308b1(0x136)),_0x19999c=CoreWindow[_0x4308b1(0x126)]();let _0x5266f3=path[_0x4308b1(0x13a)](Ps[_0x4308b1(0x14e)](),_0x1ca40d[_0x4308b1(0x148)]),_0x41d95c=[{'label':'显示','click':function(){const _0x45d96e=_0x4308b1;_0x19999c[_0x45d96e(0x12e)]();}},{'label':'退出','click':function(){const _0x2d4729=_0x4308b1;_0x404f4d[_0x2d4729(0x14c)]();}}];_0x19999c['on'](_0x4308b1(0x12f),_0x1c0b8e=>{const _0x2f9175=_0x4308b1;if(Electron[_0x2f9175(0x132)][_0x2f9175(0x130)]==!![])return;_0x19999c[_0x2f9175(0x146)](),_0x1c0b8e[_0x2f9175(0x147)]();}),this[_0x4308b1(0x14d)]=new Tray(_0x5266f3),this[_0x4308b1(0x14d)][_0x4308b1(0x13f)](_0x1ca40d[_0x4308b1(0x133)]);const _0x53252a=Menu[_0x4308b1(0x128)](_0x41d95c);this[_0x4308b1(0x14d)][_0x4308b1(0x12b)](_0x53252a);}}TrayAddon[_0x1254ac(0x135)]=()=>_0x1254ac(0x13b),module[_0x1254ac(0x12d)]=TrayAddon;