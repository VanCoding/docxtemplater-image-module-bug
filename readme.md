docxtemplater-image-module-bug
==============================
This example usage of docxtemplater-image-module shows a bug with images in the
header of docx-files generated by Libre Office.

what it does
------------
it renders the template 'document.docx' with the image 'image.png' in the header
to 'output.docx'

how to run
-----------

- `git clone https://github.com/VanCoding/docxtemplater-image-module-bug.git`
- `npm install`
- `node ./`
- try to open `output.docx` in either LibreOffice (hangs up) or MS Word (tells there's an error)
