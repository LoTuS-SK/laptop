const multer =require("multer")

const stor = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'build/img')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
      }
    
})

module.exports = multer(({ storage: stor}))