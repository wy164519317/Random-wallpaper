function _0xa81c(_0x5bdade,_0x487c70){const _0x68cc08=_0x68cc();return _0xa81c=function(_0xa81c85,_0xb118c6){_0xa81c85=_0xa81c85-0x1a0;let _0x19a737=_0x68cc08[_0xa81c85];return _0x19a737;},_0xa81c(_0x5bdade,_0x487c70);}function _0x68cc(){const _0x2cd6fb=['81XfBljR','create','kill','142984LrBaKH','javaServer','1155192hhkLBO','before-quit','setValue','1LRNpQD','进入-----检查服务是否启动------','376495WGfGxK','info','EE_JAVA_PORT','createJavaPorts','5787333YDQoUh','[addon:javaServer:check]\x20status-----------','cfg','toString','ee-core/utils/get-port','check','15aXfkYc','isRun','36pkSsot','exports','ee-core/config','env','electron','350096zLGmDR','createServer','port','enable','[addon:javaServer]\x20before-quit:\x20kill-----------','./server','3556236BTDaRn','2808280geOCgK','ee-core/log','66TGHpqd','getValue','[class\x20JavaServerAddon]','addons.javaServer'];_0x68cc=function(){return _0x2cd6fb;};return _0x68cc();}const _0x549bee=_0xa81c;(function(_0x558824,_0xfa74ef){const _0x570311=_0xa81c,_0x3599a0=_0x558824();while(!![]){try{const _0x3f2c1a=parseInt(_0x570311(0x1ae))/0x1*(parseInt(_0x570311(0x1a9))/0x2)+-parseInt(_0x570311(0x1b4))/0x3+-parseInt(_0x570311(0x1ab))/0x4*(-parseInt(_0x570311(0x1ba))/0x5)+parseInt(_0x570311(0x1bc))/0x6*(parseInt(_0x570311(0x1b0))/0x7)+-parseInt(_0x570311(0x1c1))/0x8*(parseInt(_0x570311(0x1a6))/0x9)+parseInt(_0x570311(0x1a0))/0xa+parseInt(_0x570311(0x1a2))/0xb*(parseInt(_0x570311(0x1c7))/0xc);if(_0x3f2c1a===_0xfa74ef)break;else _0x3599a0['push'](_0x3599a0['shift']());}catch(_0x5bb166){_0x3599a0['push'](_0x3599a0['shift']());}}}(_0x68cc,0xf34dd));const server=require(_0x549bee(0x1c6)),{app:electronApp}=require(_0x549bee(0x1c0)),Log=require(_0x549bee(0x1a1)),Conf=require(_0x549bee(0x1be)),GetPort=require(_0x549bee(0x1b8));class JavaServerAddon{constructor(){const _0xa35ac0=_0x549bee;this[_0xa35ac0(0x1b6)],this[_0xa35ac0(0x1aa)];}async[_0x549bee(0x1c2)](){const _0x5620c9=_0x549bee;this[_0x5620c9(0x1b6)]=Conf[_0x5620c9(0x1a3)](_0x5620c9(0x1a5)),await this[_0x5620c9(0x1b3)](),this[_0x5620c9(0x1aa)]=new server(),await this[_0x5620c9(0x1aa)][_0x5620c9(0x1a7)](this[_0x5620c9(0x1b6)]),electronApp['on'](_0x5620c9(0x1ac),async()=>{const _0x3444db=_0x5620c9;Log[_0x3444db(0x1b1)](_0x3444db(0x1c5)),await this[_0x3444db(0x1aa)][_0x3444db(0x1a8)]();});return;}async[_0x549bee(0x1b9)](){const _0x2765f8=_0x549bee;Log[_0x2765f8(0x1b1)](_0x2765f8(0x1af)+this[_0x2765f8(0x1aa)]);if(this[_0x2765f8(0x1aa)]==undefined)return Log[_0x2765f8(0x1b1)](_0x2765f8(0x1b5)+![]),![];const _0x32a6f5=await this[_0x2765f8(0x1aa)][_0x2765f8(0x1bb)](Conf[_0x2765f8(0x1a3)](_0x2765f8(0x1a5)));return Log[_0x2765f8(0x1b1)](_0x2765f8(0x1b5)+_0x32a6f5),_0x32a6f5;}async[_0x549bee(0x1b3)](){const _0x380d2d=_0x549bee;if(!this[_0x380d2d(0x1b6)][_0x380d2d(0x1c4)])return;const _0x39fab7=await GetPort({'port':this[_0x380d2d(0x1b6)][_0x380d2d(0x1c3)]});process[_0x380d2d(0x1bf)][_0x380d2d(0x1b2)]=_0x39fab7,this[_0x380d2d(0x1b6)][_0x380d2d(0x1c3)]=_0x39fab7,Conf[_0x380d2d(0x1ad)](_0x380d2d(0x1a5),this[_0x380d2d(0x1b6)]);}async[_0x549bee(0x1a8)](){const _0x1950eb=_0x549bee;if(!this[_0x1950eb(0x1b6)][_0x1950eb(0x1c4)])return;await this[_0x1950eb(0x1aa)][_0x1950eb(0x1a8)]();}}JavaServerAddon[_0x549bee(0x1b7)]=()=>_0x549bee(0x1a4),module[_0x549bee(0x1bd)]=JavaServerAddon;