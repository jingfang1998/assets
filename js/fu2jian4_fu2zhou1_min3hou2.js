(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('闽侯县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350121","properties":{"name":"闽侯县","cp":[119.131724,26.150047],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AB@@A@@@@B@@A@@@@@A@@@@@@@A@@@A@@AA@@@@@A@@AB@A@@@@@@@@A@@@A@@@A@@@B@AA@@@B@@A@@A@@@@@@@@@@B@BABA@@@@@@@@@AB@@@@@B@@@@@@@@@@A@@B@@@@A@@@@@@@@@B@@@@BA@@@@B@@AA@@@AAA@CA@@A@A@AAA@A@@AC@@A@@@@@AB@@CB@@AB@A@@AAA@AA@B@@ABA@@@AD@@@BCBA@@@@@@B@@@B@@@@@@A@@@@@@@A@@@@@@@@A@A@@@@@@@@A@A@@@@@@A@@@@@@BA@@@@AA@BA@@@A@AB@@@A@@AA@@@@A@@@@@@@A@@A@@@AA@@@A@@@@@@AA@AAA@@@@@A@@@@@AB@AA@@A@@@@A@@@@@AA@A@@@@@A@@AA@@@@@@AD@@A@@@@@@@@A@@@@@A@A@A@@@@@B@AA@@@@AA@@A@CAAA@@@@BA@AB@@A@@@@A@@@@AB@@A@@AA@@B@@@@@B@@@@@B@@@@@B@B@@@@@@@@A@@@@@@@@B@@@@@A@@AB@@A@A@@@@BA@@@@A@@@AA@@@@BA@@@A@A@@@A@A@C@@CAAAA@@A@@@A@@@@CA@A@@@@@@@A@@@@@@@A@@A@@A@@@@@@@A@@@@A@@@@A@@@@@A@A@A@A@@@@@@@@@A@@@@@AAAA@@@AA@@@C@A@@A@@@A@@@AA@@AA@E@AAA@@ACAACAAA@@ABA@A@AB@@AAA@A@A@C@@@@@AAA@@@A@@@@@AB@@AB@@@B@@@B@@@@@B@@A@@B@@@@@@@B@@@B@B@B@@@BA@@@@@@B@@@@@@@@@BAB@@AB@@A@AA@A@@ABA@AB@BAD@@B@@BB@@@A@A@A@@@@@A@CA@@AB@@@@@B@@A@@CA@@@A@@A@@@@@A@A@A@@@@C@AAAA@@@@@@@AA@A@A@@@A@@@A@C@@@@@@@@@A@@@@@BB@@@@@B@@CB@BCBA@@B@B@@A@CBA@A@CB@@AB@@AB@@@@A@@@A@@@@@A@A@@@A@@@ABA@A@@@A@@B@DAF@B@@AB@BCD@@@@@B@BA@@@AB@@@BAB@BAF@BAD@@CAAAA@A@AAC@@AA@@@@AB@@A@@@@A@@@CC@A@@@@A@AA@@A@@@A@@@@@@@C@@@A@A@@AA@@@A@@@A@ABAB@@CB@@@@@B@D@@@D@@ABA@@BAB@B@B@@ABAB@B@B@@A@@B@@@B@B@B@@@B@@@@@BBB@@@B@@@B@@@@CACAAA@@AB@@A@AA@@A@@@A@@A@@@AA@@A@@A@@@@@@AA@@@@A@@A@A@@@A@@@C@AA@BA@@@@@A@@@A@@@@A@@@A@@@@@@@@CA@@@A@@@@@A@@B@AA@@@@AB@@@@@@A@BAA@@A@@@@A@@@@@@BA@@@@B@@@AA@@@@B@@A@@@@BAA@@@@@@@B@@@@@BA@@A@@A@@@A@A@@@@BA@@@AA@@@@AB@@@@AAAA@BA@@@ABA@@@@@A@A@@@@@AA@@@@@A@@@@@A@@@@BAA@BA@@AA@A@@@A@AA@@@@A@@@AA@BA@@@A@@@AB@A@@@AA@@@AB@@@@@A@@A@@@@@@@A@@@@@AA@A@@@AB@@@@@B@@BB@@@@@BA@A@A@@@@B@@@B@@@B@@@@AB@@@BAB@@C@@@ABABAB@@@@A@C@@@CDABABA@@@@AA@@BABA@@B@BA@AD@D@B@@A@@@A@A@CBC@@BA@@BAB@BA@@@CBA@@@@BAB@@BB@@@B@@AB@B@B@B@BAB@BADD@BB@@@B@@@B@@@B@@@B@@@@BB@BDD@@@B@BB@@B@@@@AB@@AB@@@@@B@@BB@@@@A@@B@B@@A@AB@@@@A@@@AB@AA@@@AA@@@AA@@@A@@AA@@@AB@@ABA@@B@@A@@@AB@@AB@@@@@@@BA@A@@A@@A@ABADA@@@A@@B@BBB@@@BAFBB@BA@@@A@C@@@C@@@A@AA@@CAA@ABAAC@@@A@@A@A@@@AA@@@ABA@A@@@CB@B@@@BAB@B@@@@@DA@AB@@A@A@ABA@AAAC@@A@@@C@@@A@@AA@@A@A@@@AA@A@AA@@@AA@@@@A@@A@@@E@@@@A@@@A@@A@@@A@@@A@@@A@@AAA@B@@A@@B@@A@A@@B@@A@@@AAA@A@A@AA@@A@@B@B@BDD@@B@@@BB@@B@@@@@BB@@BBB@B@@BBA@@@BA@CB@@@BAF@@A@ABA@AA@@CAAB@@CD@@@BABAB@@@@AB@B@@@@@BA@@@ABA@@B@@B@@B@@@B@@@B@@@@AB@@@@@@BB@BBBA@@@A@@@@@@BA@AAA@@AE@@@@B@B@B@DCB@@@@BB@BBBB@@B@BBD@B@@BBBB@@AB@@@@BBBBA@@B@@BB@B@@AD@@@BB@@BB@@@@@BB@@@@AB@@@BBDDB@BBB@@FB@@BBB@B@@@BBBB@@@@A@@@@@@@@BA@@B@@@@@B@@A@@B@@@@A@@@@@@@A@A@@BA@@B@B@@AB@@A@@A@@@A@@A@@@@@@B@@@@A@@AA@A@@@@A@@@@@@@AA@@@@A@@@@AA@@@@@@AAA@A@A@AAA@AB@A@@@@@@@A@@@AA@@@A@@@AB@BBBC@@@A@AB@@@@@B@@@BB@A@@@@BB@@B@@AB@@B@@B@@@B@@@B@@B@@@@@B@@@@@B@@@@@@BB@@@@@@@@B@B@@@B@@@B@@B@DDB@@@AB@@@@@B@@@B@@BB@@BBBB@@B@@B@@A@@BB@@BB@@@@B@B@@A@@BA@A@@@A@@BA@@BA@A@@@ABB@@@CB@@@BA@AB@@@@BB@@@BABBBA@@BA@@@C@@@A@A@C@A@A@@@@@AB@@ABAFA@@@@BA@CBA@A@@@AA@@AB@@CBCB@@AB@@A@@B@@@@AACAA@A@@@@@BB@@AB@@@@A@BB@@@B@B@@@B@@A@CAA@@@@A@A@C@@@AB@@AA@@AABA@@AA@@B@@@B@@@BA@A@@@@@@@@BA@@@C@@BABABAD@@ABC@CAC@AB@@@@ABA@@@ABA@@AA@AACA@@@@A@AB@@ABA@@BAB@@@BA@AAA@A@A@ABA@A@AB@@A@A@@@A@CBAB@@C@CA@@@@@A@@EEAC@DAB@DA@ABCB@@AD@@@B@@@B@@BD@B@@@BABAB@B@@@@AB@@A@A@A@@@A@C@A@CC@A@AA@ABA@@@A@@AC@CAEA@@CA@@A@CB@@@@AA@@A@AA@@A@@@A@@BA@@@@@ABA@@@@@AB@@CB@@A@AB@@A@@@@@@@@B@@@@@@BB@BB@@@@BB@@BB@@BB@@B@@B@E@EAA@CAA@@BAB@@@@@B@@A@@@@AA@@@@@AA@@@@AA@@@A@@@@@@A@@BA@B@@@ABAA@BA@ABABEFABCDAB@@A@@A@@C@@A@@A@@@@@@@ABAB@BA@@@A@@F@@BBB@@@@BBBB@@B@B@@@@B@AB@@BD@B@@AB@@AD@@@B@@BB@@BB@@BB@@@B@@@B@D@BABA@@@@@A@@@@@A@@B@@A@A@@BA@A@AAA@@@@@@AAA@AA@A@A@A@@@A@A@AA@BA@AB@@@@C@A@@@A@@@A@@BA@A@ABA@A@ABC@@B@@CAAAB@@AB@@@@@@@@AA@A@@AAA@@AAAAAA@@@AA@A@@@AA@@AA@@@@@AA@@@@AAAA@@@@@A@A@@BA@@@@AA@A@@@A@@@A@A@A@@@@A@@A@@@@@AA@@@A@@ABC@@@@@@BA@@@AB@@@@AB@@@@@@@B@@AAA@@@@BA@@@@@ABA@A@A@@AAB@@@BA@AB@BBB@B@@BB@@B@B@@A@@BB@AB@B@@AB@BA@@B@@BB@@@@BB@@@AB@@BB@@B@@@@D@@B@@@BBB@@@@D@B@@BB@@BBABB@@BB@BDB@@B@B@B@@@B@@@D@@@B@@@@@@B@BBB@@@@@@B@@@@C@@@A@@@@BAA@@@@A@@@A@@@@@@B@@@B@@@@@@AB@@@@A@@@@B@@B@@B@@A@@B@@@@@@@@BBBB@@@B@BABAB@@@B@BBH@BB@@@@BAB@@@B@@@DBB@B@BB@@BB@BB@@BBBD@@@B@@@B@B@@@D@BB@DBB@@BBBBD@@AB@@@B@BBB@@@@@B@BBB@@@BB@BB@@@BA@@B@BAB@@A@ABABA@@B@B@@@B@@@@BB@@@@BBB@BB@@@BAB@@@BAD@B@@@@B@@@BBB@@@@BB@@B@@DDDDBB@B@@@@BB@@@B@@B@B@B@BB@@@@@B@@@@@B@@@@@B@@@@@B@B@@@B@@@B@B@@BB@@B@BBB@BB@@@@@@B@B@@B@B@@@@BBB@B@B@B@B@BBB@BB@@@B@@@B@BAB@@B@AD@@B@@B@@@@@B@H@B@@AB@@@B@B@@@@@B@@@B@B@BB@@BB@@B@B@@@@B@B@@@B@B@@@@@@B@@@B@@@@@B@B@@A@@@@BA@@@A@ABAB@@A@AB@@@B@@@@@BB@@BB@@BDB@BB@@B@B@@ABAD@BAHBB@@@@@BBB@@@@BB@@B@B@B@@BBBBBDB@@BB@BDB@BBB@B@BBBBBBBBBB@BB@@BB@B@@BDB@B@B@D@@@@@@B@@B@@A@@B@@@@B@@@@B@@B@B@@@@@@A@@@@@@@@@A@@@@B@@@@@@B@@B@@@@B@@@BAB@@@@B@@BB@@@B@@@@@@@B@@@@@B@@@@BB@D@@AB@BABA@@B@BA@@BC@@@A@ABA@@@@@C@A@AAA@@@AA@@A@A@AA@@A@A@@AA@@AA@@A@@B@@A@A@@@A@AA@@@AACAA@@@AA@@A@@A@A@@AAAA@@AA@@@@A@@@AC@A@@AAA@AA@@A@AB@@@@CAA@AA@@C@ABA@CACB@@@@A@@@@BAAA@@@BB@@A@@@A@@@A@@BCBABCD@@@@A@@A@A@AAABA@@@@@A@@BA@A@A@@@@@@@ABA@A@@@ABA@@A@@@A@ABA@@@AA@@@@@@@@@A@@@@@@@A@@@@A@@A@@A@A@C@@B@@@B@BA@@@@@AB@@A@@@AB@@@@A@@AAA@A@BA@@@AAABA@@@A@@B@BA@@@ABCA@@@@A@@@C@@@@@@D@DA@@B@B@F@F@F@@@B@@AF@D@B@BCH@D@@@DBDAF@DAD@F@@BBB@B@BBB@DBB@@@B@@B@@B@@BB@BB@A@A@@@A@A@@@@@@BB@@@@@@@@@A@@@@B@@@B@@@B@@@@B@@AD@@@@@@B@@@@@@@B@@@@@B@@BBB@@A@@@@B@@B@@@B@@@B@@@@@@B@@@@@@AB@@@@B@@@BB@@@@B@@B@@@B@B@B@@@B@@@BB@A@BB@@@B@@@BB@@B@@@@@@@BB@AB@BB@BDBB@@@BAB@@AB@BBBBB@BB@DBBD@@B@@@@B@@@@A@AB@@@@BB@@B@@BA@@@AB@@BBA@@B@BAB@B@B@B@@@B@@@@@@@B@B@B@B@@D@@@@B@@@@@B@@B@@AB@@@BA@B@@@@BB@BB@BB@@A@@B@B@@@@@B@@ABA@A@@@@@@BA@@@A@@B@@ABB@@@B@@@@@AB@B@@BB@B@@@@B@@BB@@@@BB@B@@@B@@@@@BB@@@BB@@A@BB@@@@@B@@A@@@@BB@@B@B@BAB@@BA@@BA@B@@@@BB@@@B@@@B@BB@@@ABB@@@BBAB@B@@BB@@@@B@@@B@@A@A@A@@@AB@BA@BB@BB@F@B@@@BB@@B@B@@B@@@@@B@@@@@B@@@BCBBB@BBBBD@@@BBB@B@@B@BBBBBB@@C@ABA@@@A@A@@BBBA@@@@@AB@@A@@@@@@@@@A@@@@@BBA@@B@@@@@@@@@B@@@BBB@@B@B@B@B@BAD@@@D@B@@@B@@@@@@@AB@@@B@@@@A@@BB@B@@@B@B@BBB@@@@AB@@@B@@@@AB@@A@@BB@@@@@B@@DDB@@B@B@@C@@BCBAB@@@@B@BB@@A@@BA@AB@@@@@@@B@@B@@@@@B@@@@@B@@B@@@B@@@@A@BB@@B@@B@@@@@B@@B@@@@@@B@BB@@B@@BBB@BB@BF@@@BB@@@@B@BA@@@BBBBD@@B@B@B@@A@A@@DC@@B@@B@@@@B@@@BFBB@BDB@BD@@B@@AB@@ABA@@@@B@@@B@@@BB@@@@@@BB@@@B@@@@@B@@@B@@@BB@@@@@B@@A@@@BB@@BB@@@@@@@@BB@@@@BB@@B@@@B@@@B@B@@A@@BA@@B@@@B@B@B@@@B@B@@BDA@BB@B@@B@@@@@B@BB@@BBB@B@@@B@@DB@@B@BBBBB@@@@B@@@B@@@@@BB@@@B@@@@@B@@@@@B@@@@@@A@@@BB@@@@@@B@@@@B@@B@@@@BBABB@ABB@@BADAB@@@BB@@@@B@@@B@@@@@D@@@B@DAB@@@D@@@@@B@B@@@@A@@B@B@@AB@@@@@B@@@@DB@@@@@B@@@@@@@B@B@@@@BB@@@@@BB@@BBBB@@@B@DBDBB@B@@B@@BB@B@@B@@@B@@@B@A@@BB@@@@B@B@@@BAB@@A@A@A@A@@B@@@@@@@@@B@@A@@@@@A@@B@@@@A@@B@@@@@BD@@@@@BB@@B@@BB@@@EB@BBB@@@@@B@@A@@@@B@@BB@B@@A@CB@@@@@B@@@@AB@@C@@@AB@BA@@BAB@@@B@BC@A@C@@@A@@AB@AA@BA@A@AAAAAAA@@@A@@@AB@@B@@@ABAB@@@B@@@@@B@@@@@B@@AB@@@B@B@@A@@B@B@@@BAB@@@@BB@@@@B@@@@B@@@BB@A@@B@@@BB@@BBB@@@@D@@@B@@@BB@@B@@AB@B@@B@@BB@@@B@@@@@BDBB@@@BB@@@@D@@@BA@AD@@@@A@@@AB@@@@A@@@@@C@@@@@@@@A@@@@@@A@@@@BABA@C@A@@@A@@@@@@@@BB@@B@@A@@B@B@@A@B@@@B@@A@@B@@@B@B@B@@@B@@@@BBB@B@@@B@@@@@AB@@@B@B@D@@ABA@@@B@@B@@@@@@@B@@B@AB@@AAABA@@@AB@B@B@B@BB@@BBB@BA@@@@@A@@@C@@@ABA@E@@@A@@@AB@@A@A@A@@BABB@@@@B@@@@@B@@A@@AA@@@@B@@A@@B@BA@A@@@@B@B@BADA@A@A@@@@B@@ABBB@B@@BBDAFDB@@@@@B@@@B@@@@AB@@AB@@@B@@@B@@A@@@@@A@@@@@@@@B@@DB@BB@@B@AD@@@@@@@@B@B@@@@@B@@BA@@@@B@@@@@BABA@@@A@@@@@AB@@B@@@@@BB@@@B@@@@B@@B@@@BFDB@BB@@@BAB@@ABAA@@A@ABA@@B@@BB@@BB@B@B@@BB@@B@@@@AB@@B@@BB@@@@@B@BBB@@@B@@@@@B@@@@@BA@@B@@@@@B@BB@@@B@B@B@DABADA@AB@@BB@@@@BBDAB@B@@AB@@@@@B@@@B@B@@@@B@@@@BB@@@@B@@@@B@B@@@BABB@@B@@AB@@@@@B@BA@@B@@@@@@BB@@@B@@@B@@@B@@@@@B@@@@@@@@A@@B@B@@@@@@B@@B@BA@@B@@@B@@A@@@@B@B@D@@@B@@B@B@@@@B@@@@@@B@@@@B@@@B@@BB@@BB@@B@B@@@@@B@@@BBA@@@BD@BB@@@AB@@@@ABA@@@@B@B@@@B@@@A@@A@@@A@@B@A@@@@@@A@A@@@ADAB@B@B@@@@@@BB@@@@@BA@@@@B@@B@@@@BA@A@@@@@@@@A@@A@@@@B@B@@@@A@@@@@A@ABABAB@@@@A@@BA@@@@@A@@@@A@@@@@@AAC@@A@@@@@ABA@@@@BA@AA@@A@ABAA@@@@AA@A@@BA@A@@AAAA@@A@A@@@@@@@AA@A@@@AA@@@A@@@@A@@@A@ABC@@@@@A@@@@B@B@F@B@B@D@@C@A@@B@BB@@B@B@@@@@@@@BB@B@B@D@B@@@@@@@@B@BB@@@@@@@B@B@B@D@@A@@@@@@@A@@A@@A@@@@@AA@@@D@DA@@B@B@@@@@B@B@BBBA@@BBD@@D@B@@A@@BB@BD@@@@AB@@A@AA@B@@BBB@@@B@BB@@@@BAB@@AA@@@@@@E@@@@BAB@@@@AAABCDE@@@A@@@CA@A@@@@A@@@@B@B@BAB@BA@@BABABA@@@A@@@@BAB@@AB@@@@@@A@AAA@A@@@A@A@@@A@@B@@@B@@AB@@@@@BA@@@@@A@@@@@@AA@@@@BA@A@@B@@@B@@@@@B@@BB@B@B@@@BA@@B@@@BB@@@@@@@@@B@@@B@@@@BBB@H@J@B@@@BAB@B@@ABA@@@@@A@@@@@@@@@@@@@@@@@@@@@AA@@@@B@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@A@@A@@@@@@@@@@@@@@@AA@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@A@@@@@@A@@@@AAAAA@A@A@@@@@A@@@AB@@A@@@AA@@@A@AAB@B@@@@@B@@A@@@@AA@@@A@A@@AA@@@@AA@B@AA@@A@@@@BA@@@A@@@@@@@AB@@@@@BAB@@A@@BA@@@@@A@@@A@A@@@@@AB@BA@@@@B@B@@@@@@@@A@@@@B@@@@@@@@A@@B@B@B@@@B@@@@@@@B@@@AA@@B@@@BA@@B@@A@@B@@@B@B@B@@A@A@@B@@@@@BA@@@@@BB@@A@@@@@@@@@@BA@AB@F@B@FBB@BB@@B@@@@AB@B@@A@AB@@@DABA@@@A@ABADA@@B@@CB@@AB@@@B@B@HC@@B@@@BAB@@@@AB@@C@@AA@C@@@@BA@@AAAAA@@@AA@A@@@AA@@AA@A@A@A@@@@@A@AAAA@@CAA@@@@A@@CAA@E@@@@@AA@@BABAB@BADA@AB@B@@@BAB@BAD@@ABAB@BA@@B@@@B@B@DCB@B@@@@ADADABAB@DCBAD@@@BAB@B@D@B@B@@@BA@@D@D@@@@@@A@A@A@A@A@@AA@@BA@AA@@@@AB@B@BAD@B@BAB@BA@@@@BADA@@@@FB@@@@@@BA@A@@B@B@BA@@BABA@A@A@@@A@ABA@ABA@@B@@@D@@@BAB@B@BCBAB@BA@AB@@A@@B@BAA@@@CAGCA@AAA@A@A@A@@@@@@CBA@AAA@ABA@ABCBCBCB@@@B@@@B@B@B@@@B@D@D@B@B@@@BB@@B@@ABA@AB@@@BA@AB@@@B@BAB@BABADA@@B@BAA@@@@@A@@@CAE@EB@@B@@@@B@B@@@B@@AB@@AB@A@@AB@@A@@@@@A@@@@@AA@@@A@@@A@A@@@@ABA@@@A@A@A@@B@@A@@@A@@AA@A@A@@AAA@@@@A@@@A@@BA@C@A@@@A@@A@A@@A@@@AB@@@@AA@@@@A@@@@@DE@A@@@@A@AAAA@@AB@@A@A@@@@B@@A@@@A@@B@@@@A@A@@AA@@@@@@AA@@@AA@@@@A@@@@AB@@@@@BA@@@@@@@A@@@@EACAUCCCA@@A@@@A@CDCAA@@@A@@BA@@@@@A@@@@BAB@@A@A@@@AB@@A@A@A@A@@AAB@@A@@BABA@A@@C@@@@A@A@AB@@@@@B@@@@@BA@@@A@@@@A@A@A@@@@AA@@@ABAA@@@@@AB@@@@@AA@@@@A@@@A@CA@@@@@A@@@AC@@@A@A@@@A@AACBA@@CBI@@BK@C@@EM@AAA@@@@@@@A@@AA@@A@A@@@@@AA@@@AB@B@BABAD@@@B@@A@@@AB@BABA@@B@@AB@DC@@B@B@B@B@@AB@@A@@BA@@BA@@@A@@BA@@BA@@@@BA@A@@@@@ADA@@AA@A@AA@AAA@A@@@A@ABA@C@G@@@@@AA@C@A@@@AA@@AA@@@@A@A@@@@@AAA@A@@@@B@@AB@BA@@BADC@@B@B@@@BA@A@@@A@A@@@A@AB@@@@AB@@@DAB@@@@@B@@@@@@@BA@@@@@@B@@BBBB@@@@BB@BA@@B@B@@@B@B@B@@@@@BABA@@AAA@@@AAACAB@A@@@@BAB@BADBB@@@BAB@@BB@B@B@BABABA@@@@BCBA@C@@@@@AA@@@AA@@@@B@@@@@@A@AA@@C@@AA@A@ABA@A@@@@@AA@@AA@@C@@@ABA@A@@@A@@A@@@@A@@@AAB@@AA@@@@BA@@@@@@A@AAA@A@@A@@AACA@AA@@@@@@A@A@AB@BC@@@@A@@A@@B@BABA@@BAB@D@BA@@@@@A@@AAA@@@@ADA@A@@B@BA@@DA@@A@@A@@AAAA@@EC@@@A@A@A@@B@DBB@@AB@@@B@AA@@B@@AB@@@AA@@B@DABAB@BBD@BBB@B@FD@@B@BABBB@@AA@@A@@@A@AA@BA@@@@BA@@BBBA@E@@@ABA@@@@B@B@DBB@@@@@@@B@@A@@BA@A@@@ABA@ABCBADA@@@ACAAA@AC@@@A@@@@A@A@@B@@@@@B@@@@@BA@@AA@A@@AA@@@@@A@@@@A@@@@A@@A@@AA@@@A@A@CB@A@@@AA@AC@@@@@A@@AAA@AA@A@@@@@A@@@A@@FC@A@@AA@AAA@A@@BA@ABA@@@@B@BBBB@ABA@@A@@AAA@@@@@@AA@@BAB@B@@A@@B@@@@@@B@B@@B@B@@@@@B@B@@AB@@@B@@@@@@@B@@@BB@AB@@@@@B@@@@C@@B@@A@@@A@@@AB@BA@A@@B@@@@B@@@@@@@@@BBA@@B@A@BA@@A@@@DGBE@ABAA@@AA@AAAAAA@@@@IGAAAA@@C@CAFCBEIC@@@@A@@A@@@@A@@@AF@BCDCF@@ABA@ABCAE@@@CAAACACAA@EA@CDABA@ABCBABG@A@CFSBC@A@C@IBQ@G@CF@BM@@BEBCBEDC@ADCFGAAGAJMJCBAFCWSCA@@ACA@BAB@@@@ABA@@BCDEBA@@@ABA@@BA@A@@DBB@@BDAB@@@@@BB@BB@@@@@@@@@@@VPDAFEDCHEDCB@JCD@JAFA@@B@FCHBN@L@JAHCD@@@B@B@B@DALAD@D@D@DAF@D@D@D@ZENELCDAJENAJEJCNCDBACAA@@CC@@@@AAAA@@@@@@BA@AAAB@@@@@@AA@@A@@AAAA@@@A@@@@AA@@@AB@@@BAB@BA@@BCA@@A@@@AB@@ABA@@@@@A@@B@@@@@@AA@@@@@@A@@@@@@@@@@B@@A@@@A@@@A@A@AAA@@@@AA@@@A@@@@@@@@B@@@B@@@@@@AB@@@B@@@@@D@@@BA@@@@@@B@@A@@@@@A@@B@@BB@@A@@B@@B@AB@@@B@@@B@@@@@@AB@AAB@BAAA@@@@@A@A@A@A@@A@AA@@@A@@B@@A@@@@@AB@@A@@@@@A@@@A@AB@@@@A@@@@B@@A@A@@@@"],"encodeOffsets":[[122290,26523]]}}],"UTF8Encoding":true});}));