'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3d76919590f5f03ee91dd91a2241916e",
"index.html": "24963789f90e0d4acd2da0f552aa1e67",
"/": "24963789f90e0d4acd2da0f552aa1e67",
"main.dart.js": "7e6910779fbd8c0938f81bb1c9281937",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "06d25aac9f5d2a065be5bc01c3bc07a4",
"icons/Icon-192.png": "720b24288a0f812b385b2eaa0c7fe8f5",
"icons/Icon-maskable-192.png": "720b24288a0f812b385b2eaa0c7fe8f5",
"icons/Icon-maskable-512.png": "e636ad02b18abd8fedde8e97e4452c2a",
"icons/Icon-512.png": "e636ad02b18abd8fedde8e97e4452c2a",
"manifest.json": "2a953f60d34d1858709995cf1bb73d6b",
".git/config": "44eb6db57df1776af7ca49e1c7336c85",
".git/objects/0c/6a079d8a398108c5a570c8d026094750d7e80a": "c55cd6b40207c522abdb22534aa04304",
".git/objects/66/b8008d679cf2e077fbcac4f5d32cef2587fe81": "b941a8dbe26fc8eb7d0ae2447435d3ac",
".git/objects/66/b79220ef9f2ca74bc0b09426f8ce1d2d243d7d": "72f24239e6d3d21bc290b7fdf1fb1f2e",
".git/objects/50/a3d5e282916816b6e318472b2b65308543cf64": "f6beacb027afff67cdecbfc1edb2fbbd",
".git/objects/3b/0a29bf2ed79a7040e1c3ea25344ee8dc7b5be0": "91583127bb31eb3fb2fe71b67adf6e5b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/9af3a02b6b5672d7acff87f240321fca172732": "f4badafb824778f849dc14b0c48a9725",
".git/objects/32/5516f6d9b6e651f1402f0bf7427a6ef37136d2": "07eb3873a7a80a82e5375e27506ded12",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/ffa68c45af9812af89e0711488390e817b71b3": "05b2c913083b29938a1004dd599fad89",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/61a28522b763e83d2f2fa64ff4fdf4a57ef8d9": "2ef911060a66a7bc8649a51e627b075e",
".git/objects/67/5ffcce096c9d52e4299ee578e3a09fba7d023a": "5712c0365694cfb5fbf87b5699595915",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/7361f33ae2eb8e601c6e532e715448a1ad53b8": "c37ab6bf336136d818ce1831a715de5d",
".git/objects/93/756f03e18415925d7f91105576682942420086": "e05b5c9a8fcb2865ba5dc4405fa225e0",
".git/objects/93/2da4af59f3db954b081f2b7c949bbb8ec95913": "45cab551939bc6dd6c257a00b9710172",
".git/objects/94/a4489c68e6de8b92ae716336c9895f9d5b4259": "1af303b797f1c8f8132848473e083abe",
".git/objects/94/0df0b1471ffdcc8d16402237e19a28dc69b87a": "68bd13d152e9e6087c3ffccbe48b4f3f",
".git/objects/94/5e56aa8804b882eca9210ce6901c5bad7e2eb6": "a9dbf64edf6888e7dade7b33dbe101c1",
".git/objects/0e/0b4b140faacff8ac82965889d82fc49f35a662": "6c6cbbeb5893aa0392a2c1fde5e8bb90",
".git/objects/33/b69e6390fffc664f90a3d59df029e6ba177b7a": "0e4dd64a8796e68d159acd565bacf235",
".git/objects/05/78bcb39411312a624d6c66089e396ad1371fc4": "7ad306a4c3a767f58fc3418e00a5ffd5",
".git/objects/05/9f3d83a63ba38d3dd3d0fdfc37b0db0c723f63": "6bc9328982c86e813387169733e25ac7",
".git/objects/a3/66d90d544dd8696e4b8b00755267721986dd6e": "558c3812c5fdd418ca74915f1d8a11a5",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/5bc40b37abb9fac369947959567814ead8186e": "5ed0fd0a9da4217f67878702b65406a9",
".git/objects/da/455df523293afd2433713f46f501ddfb8572bd": "a6d0acefe91aaac00e12d5b0d85d7096",
".git/objects/da/8bfdff476b4be3467b4f65be4706c16882c770": "aae58b585746c22c8b631ce96afbdd6d",
".git/objects/bd/1d83bb87af1783daaa3e0ab05edbfa80b5b162": "6217b5d4eb73763e7e6f0b15b8deaef2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/4d805d7841a76831da8928fd874f8eb0f60c37": "3d4ef169811221a94136b9845be8f3cf",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/87fbe14207f9ebf0acecafd1e22ab98b479459": "35194313d43174323332f7d72133a82c",
".git/objects/ab/fc7689ddacd8deb7d64fa297675ba72cd1876d": "ff0738359ba99b086c45766576add7cb",
".git/objects/e5/125d71da359cc404d8317c3569eeddbecf0775": "54173517af718f8ea27f63a3a177eb53",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/17478d23078b3c6880717a1f9238763c28abcd": "386397ca42508b6b8ce3336e42c026c4",
".git/objects/fc/88eedd5d8b86f924a914dde70f9f517966e7c7": "1207ee5b052adb6fd1602e4f78138ec3",
".git/objects/f5/a11248d11f82a2c768951931f28e8d3272f64e": "8011e51eb3d41daa17eadefa0e700188",
".git/objects/e4/ddee0b1d97f19236754dc6901194e22f5ddbb5": "f7f40e7d2db78de9b48b1c673b3cd8c0",
".git/objects/c8/18eb3c814e031e6da51d09dfaa6dae9789811e": "12e724052daefe3659db01debfa993ce",
".git/objects/fb/4b3c55dc55fbf1254e4a9288f22adfb99acd46": "108549fde885630cb571b7b0aad9ddcd",
".git/objects/c6/e5e0f3513b86fa79995bff17ff835db0564aaf": "ec9e00894dba6fecc8ac451232cfa02d",
".git/objects/4e/72670796bef0f8189d61eb3bd33f8d4114e3e2": "6f1396dffb12c5d38e1aaba3752bb4ff",
".git/objects/7d/957566a672c6bce8c262896f395a939ea61fb6": "1ba2f42b1adf2a4af6245bcbd79b8204",
".git/objects/16/c249b1feb70b2efe31f6d8ef31361ad23a3337": "598f2358cadcc300b315d67d4fc52054",
".git/objects/16/b6160fd959f7db5bb877d37771de454afb41d2": "026c536cf134a0d77cd900d9669060e5",
".git/objects/89/6ecaee14e37c4fb0dc86fbcc97312ee5996cae": "7fe65253cc815630cacba7950e399ab8",
".git/objects/89/bc5eca48568871a8d96e63782df3343a567d93": "2d8b0e367f67b65b9893d50f2cafa5dd",
".git/objects/45/903c2988f46877c5f09c47771702653f05ed01": "cad054072c8d8efe664d98fce906ef68",
".git/objects/87/b38d69c7d603fc10b145d041bc0ba4c9278511": "423c5acccd872689a77995e4d47a2bca",
".git/objects/80/97c4d7606a83ba8ca303b4eb1427a819769481": "edc8eb61d8ae1faa6332ddec19b01a75",
".git/objects/28/f2240b9845900715af27f8814b7620735af2cf": "aff5ab6e183e8627ce17b715a8507847",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/db3f1b7eb4226afe0656832f7eaacd2ac8eca7": "41e5172595908cfd9f61f1bd7bf6b4d0",
".git/objects/4d/398cb0a8414939dd148ef49fdecad0f997ab8f": "3cc12bee91eb446bfc731755a2926945",
".git/objects/75/047c3d3ba02c7765b564fc4706a6d113696f2e": "f3e416c4daaaa6fa2a46aefbda66c8e3",
".git/objects/72/72eadebd9b8ee832875c79ab241b095d723255": "9bafd95325c64e9c747e8217c91286cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/00bead8df2f45e49b5c4394dfde1719f644f65": "c95592c2333312267efb5a926f877b8b",
".git/objects/9f/a934a2b0317debf919e8db7ec23e9e4c121458": "a190f95adf4531e66a1d2942fd602d6b",
".git/objects/00/1961bbac6af6c2cd6f0a7e0e43067beb5ea583": "c2e636ee91d19245e972df4d4c3b4790",
".git/objects/5c/baef56754fc98153244aee004f0afedd797f7d": "e423add2029a7af4f4b9971c7d5e9c65",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/30/68db2dda508a6a8943be9c35ec6a2ed12b6054": "5070395845ed72bf14e29c486d2a82b4",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/5d553cfd2092ddc8dd8046928a12305e3f4815": "04fe761226716252d132642757d54226",
".git/objects/08/122b26e44f806cb2f806d2cbb4d48b4ce26a4e": "d59d65eabc1a528b301c03fac8a7dd78",
".git/objects/06/dfce63f6d9b9ed18e76f0ac967249a3eadf1f8": "1e1d2c21fcda112f1be1f2bfc31ed26e",
".git/objects/52/34b8e2b0f59493c3d3a4c70f24bad2c6df1b3c": "1b690341f220e5c2455f84b585582fa0",
".git/objects/63/f767663a8afc00b5c08498d72f47d901c48267": "f47eeb6614ebe64082d2545939162db0",
".git/objects/64/20683865bec6f1fe7d14e290df9236bc2996f9": "af2dc0dd277835f6541abd151193c0c7",
".git/objects/90/84da9d056a1ef4973c7a8b5aeb326d3cde1199": "d57825c5dd78e56d27446c10c4a4b21e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/6cc7db9f7eee0d81c0d44be5781ca1230827fa": "c9aad63517a2bc715bc1e3bfa40b8690",
".git/objects/b1/265c6fadc5357335578f3d3f2081d84a3b6586": "d990074650b87715ff1f0ff47f3adb4c",
".git/objects/b1/1f198387c1339a900fa9c6f7abe01907a84e20": "e61d702666baa09489879a54d8fb1817",
".git/objects/b6/49a18c8816cd0f098c57a452380956b526acca": "24e588d3cdb18774c6a06f79a307644d",
".git/objects/d5/d94835c44564e7921148724f041349bbcab676": "f04c7f5a9d861e59035cd229faa162f6",
".git/objects/af/c056cf8b04291b7e657e9c6ef0127d7ecf2391": "520712df9a5d831c747bcd4685ca1998",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/b9f86017435075d1579f985057e4a19b92be13": "6ed9dd55884417a2e9e02b8b1282695c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/538ed93858293ce53b3707f00691a98834b4fd": "d791c2165c2c35677e1931bf65d5c8b6",
".git/objects/fa/12a66fe15e6853c83dd4a35db4a34d2793c24f": "7faff6c8584bd9efb1deb568ab56fdb4",
".git/objects/f6/8c04917da240084099515c65503b82484ee1b5": "db245ea1252270e5b4ebe5d54f294d6b",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/3a4e8db43eb6df7afcb688baa775b6803f2508": "85632d6261e3911a04058c65fc7682c6",
".git/objects/f8/6915864a316dac6ebb1b85eae9aed7959e24d3": "2ba384489a8c088b0b767c7720de7ec2",
".git/objects/f8/399de5d8cf13557c4a525bad3e58c2f9e6d306": "1508c11105885bca3ad0f7dd1e9a94cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/78609b6dbf93a5e99a50a0383b67c36fa5862f": "7234ccf813d0aee8c6272d1b16442fe9",
".git/objects/41/bf343559fd13f07115e15a82157c21316efac1": "655469a6cd1616577733e8b95d41ea02",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/f121d692cc8a9be991b6a968f4084821b22d04": "b69c34c8c2e5a0c656b8458289fc22f1",
".git/objects/12/349928df3994fe3b2872ef3c216a61cd49bfc8": "0275f9aa5a4c34ee25fb3cda92dc3987",
".git/objects/1d/a2db8b5230a92adbb659eeeef69a25acde15fc": "bf20099a086e3c68deb024f26b664319",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/18833a858410ac67344084ce02a1aa3b8e9aec": "8d3df2fd9dfdfb87dec7f6d62885e06c",
".git/objects/82/ddb8c0b2c752385bf37852d4fa4f3f7d26a397": "95447ba10c2a345e53d8221e549f75c6",
".git/objects/82/21f7cafffc2c87163f400cecc4090229b31e46": "55156625524ab634581f722b138c62fc",
".git/objects/13/05d87d8512faf39e5848bc3d5ccc81d74a4116": "60709b0832a92de2b71124438d74ab8a",
".git/objects/7a/0616bd58d1b466008a4f94cdb12c6563534b31": "e3aa344ca7b1625cbbd189ce87bcdbc9",
".git/objects/14/ece3eeaec1806acd4a2d58f8fecac4c9f4f068": "61c718b72977048b2b252edce7fb9c6e",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "469d22ece305b8fa08147ad0fb43296d",
".git/logs/refs/heads/main": "469d22ece305b8fa08147ad0fb43296d",
".git/logs/refs/remotes/origin/main": "6e7f98491d6f697682d1cf6154e052d0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7ec8a7901c7898e14dad9d3eed90f583",
".git/refs/remotes/origin/main": "7ec8a7901c7898e14dad9d3eed90f583",
".git/index": "25cf6bcd2247b75c086c018c411a9d5b",
".git/COMMIT_EDITMSG": "3a34dced89f309b1f569ebdc79cdaa30",
"assets/AssetManifest.json": "79ac1828f8b0cb05350b99941f0219de",
"assets/NOTICES": "53620c5b7df18df060eff6ade4ea83e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2ed6f8bd673c514b8d11340740506b06",
"assets/fonts/MaterialIcons-Regular.otf": "8727e65fbd2acc19cc8a6be2a4df6175",
"assets/assets/flashcard.png": "66ab449ec4b845fe73d11aac904598dc",
"assets/assets/conditionsba_icon.png": "a7f171369f6d59c054e1d1b2b59d872e",
"assets/assets/brain_icon.png": "fc741e18c53a01b204436400f6946a4e",
"assets/assets/drugsba_icon.png": "db12358617dea75f2856022c56d69a70",
"assets/assets/icon.png": "8526a7b97528ea8546acc411ab0067c6",
"assets/assets/dsbaicons/anesthetics.png": "812992677b3ce955858e8c59f911ecbd",
"assets/assets/dsbaicons/antipsychotics.png": "5c3ab2e5890b0416866413b056e75029",
"assets/assets/dsbaicons/thyroid.png": "2c807dc8447f38656b2e8a3a41e2e238",
"assets/assets/dsbaicons/contraceptives.png": "b15f24a2a5201a1928020127ef5af543",
"assets/assets/dsbaicons/oncology.png": "688ed09a6b3b1cc3f7954534988680be",
"assets/assets/dsbaicons/antidiabetics.png": "7f8c9a79c40c30281d508765b27cb793",
"assets/assets/dsbaicons/cardio.png": "23de06e32ee7b73b69fc94f09cc62d7a",
"assets/assets/dsbaicons/antidepressants.png": "69c1879719971888e135a79987d2f0ab",
"assets/assets/dsbaicons/anxiolytics.png": "bf7104248f39075aa6d0aa1d6a340ea8",
"assets/assets/dsbaicons/lipid.png": "75608304e42474ff7ff7cfaebc4d7f07",
"assets/assets/dsbaicons/antihypertensives.png": "f3dc2ec2fcb22b8aa98b5469ce5819ab",
"assets/assets/dsbaicons/dermatological.png": "95f949a6807649f1e1519fa6961954e4",
"assets/assets/dsbaicons/gestrointestinal.png": "ea43c55d0d027d5917ac72bcc55e635e",
"assets/assets/dsbaicons/analgesics.png": "cbd45eea3e57dc2b2dff3ddf042ed19a",
"assets/assets/dsbaicons/anticoagulants.png": "424081a2b26ebc8051d58135a789c303",
"assets/assets/dsbaicons/antiallergics.png": "9a188bdc4d2a78f4d1051f7f182d81f3",
"assets/assets/dsbaicons/anti_infectives.png": "6566a96b3bcf04423fa8b1f0cd424db3",
"assets/assets/dsbaicons/antiasthamatic.png": "9850dd64dae21285b3091a3d646d4555",
"assets/assets/dsbaicons/lipid_lowering.png": "268ca537d27bfa4f212512bf661f5c06",
"assets/assets/dsbaicons/respiratory.png": "e7e79ac770a419f58908c5ba062bad41",
"assets/assets/dsbaicons/imunomodulator.png": "b2bccab5b97b455dcefaab179fb59dd9",
"assets/assets/dsbaicons/vitamins.png": "82aba172c7f64e8b68eb19120e59ecd4",
"assets/assets/dsbaicons/antibiotics.png": "02c47f51012e5cb4493ee23abd39b0a3",
"assets/assets/dsbaicons/urinary.png": "a5f48fb717bc1153949eefbf8cffbc88",
"assets/assets/loginpage.jpg": "a4a011bee7d58ba02a970363af5dc763",
"assets/assets/settings.png": "46661bb1dbe1ecd76f5b8f2afadc2f4c",
"assets/assets/drugflashcard.png": "10b3ef00f6b5a91a8e1fc5a9406a2c0e",
"assets/assets/conditionflashcard.png": "fa2de4dffcd01232e114bb8c1845b934",
"assets/assets/contact.png": "2cb1267bfb2dc6f2dcd2d9a510a01727",
"assets/assets/logo1.png": "8e850d358da120fc42486592fd059c87",
"assets/assets/error.png": "ef7638514abeff79922aab05bd070cfb",
"assets/assets/topdrugs.png": "a203d3d3cc2f321bf9ac7cbf077c372c",
"assets/assets/csbaicons/infect.png": "120e37c4be98ac4b83f65cc8c18957b6",
"assets/assets/csbaicons/dermo.png": "95f949a6807649f1e1519fa6961954e4",
"assets/assets/csbaicons/renal.png": "350abde37d915cc69fbf0da77b06218c",
"assets/assets/csbaicons/mental.png": "1868a165426eea6a726292e38c107959",
"assets/assets/csbaicons/cardio.png": "bbdf03890a867665edaef41e5ab672c2",
"assets/assets/csbaicons/sextual.png": "12e19d91b4f45f8be9084243fea03a0c",
"assets/assets/csbaicons/gastro.png": "0740d0d717147927164e74c416a82a3a",
"assets/assets/csbaicons/ent.png": "a33da728f86d2a1579962a309852699a",
"assets/assets/csbaicons/optho.png": "0ab9915fea0bc4941d4bb376282217b1",
"assets/assets/csbaicons/hema.png": "6cd3eda3e5c584de193c6a46e60f8398",
"assets/assets/csbaicons/respi.png": "5fd4d6e8592edce1522d4eb47a8c79b0",
"assets/assets/csbaicons/fmr.png": "fcda5839b8bfe132ca4a2eb9d8b4c6c4",
"assets/assets/csbaicons/msk.png": "943f98ab6e420421941b4f2df1310903",
"assets/assets/csbaicons/endocri.png": "0e1ad7bf92792ea7227419d45c7829e5",
"assets/assets/csbaicons/nuro.png": "94ac459d9940775233f82d7046d7eb86",
"assets/assets/perror_icon.png": "242cf3a572dab2d54078fb3db79cb6a5",
"assets/assets/admin.png": "3404af44efdde05f823b5cb040fbfe33",
"assets/assets/google.png": "1e01fe36388e7453ab926c23b190827c",
"assets/assets/crown.png": "d7b0902fb25eba71eeaf1ca298780ba8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
