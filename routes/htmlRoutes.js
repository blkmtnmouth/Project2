const path = require('path')

module.exports = function(app){
    app.get("*", function(req, res){
        const PATH = path.join(__dirname, '..', 'public', 'index.html')
    })

}