
/*
*
* describe ： 加载css样式
* author: wxl
* 
*/

var pluginCss = '<!--plugin css start-->' 
			   +'<link href="../plugin/bootstrap-3.3.7-dist/css/bootstrap.min.css" type="text/css" rel="stylesheet">'
		       +'<!--plugin css end-->';

var      css = '<!--custom start-->'
               +'<link href="../assets/css/reset.css" type="text/css" rel="stylesheet">'
			+'<link href="../assets/css/base.css" type="text/css" rel="stylesheet">'
			+'<link href="../assets/css/fonts.css" type="text/css" rel="stylesheet">'
               +'<link href="../assets/css/layout.css" type="text/css" rel="stylesheet">'
               +'<link href="../assets/css/common.css" type="text/css" rel="stylesheet">'
               +'<link href="../assets/css/plugin.css" type="text/css" rel="stylesheet">'
               +'<link href="../assets/css/page.css" type="text/css" rel="stylesheet">'
               +'<!--custom end-->';
               
var template = '<script type="text/javascript" src="../../common/template.js"></script>';

document.write(pluginCss,css,template);



