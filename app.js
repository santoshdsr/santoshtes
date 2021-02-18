const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        const PDFDocument = require('pdfkit'); 
        const fs = require('fs'); 
        let pdfDoc = new PDFDocument; 
        pdfDoc.pipe(fs.createWriteStream('response.pdf')); 
        pdfDoc.text("response.pdf");
        pdfDoc.end();
        
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....");