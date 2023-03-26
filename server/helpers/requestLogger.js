function myLogger(req,res,next) {
    console.log(`request received to ${req.url}`)    
    next()
}

module.exports = myLogger;