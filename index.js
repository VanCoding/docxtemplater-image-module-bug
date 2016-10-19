var Template = require("docxtemplater");
var ImageModule = require("docxtemplater-image-module");
var fs = require("fs");

var template = new Template();
template.attachModule(new ImageModule({
	centered:false,
		getImage:function(value,tag){
			return fs.readFileSync("./image.png","binary");
		},
		getSize:function(img,value,tag){
			return [200,122];
		}
}))
template.load(fs.readFileSync("./document.docx"));
template.setData({"image":""})
template.setOptions({})
template.render();
fs.writeFileSync("./output.docx",template.getZip().generate({type:"nodebuffer"}));
