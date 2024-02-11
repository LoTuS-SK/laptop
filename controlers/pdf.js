const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

async function pdf(req,res){
    
    //const message = (req.body)
    
    res.send("./pdf.js")
    console.log((__dirname))
}

module.exports = pdf