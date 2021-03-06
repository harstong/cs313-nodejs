var cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/getRate/:weight', function(req, res){
    res.render('pages/getRate', {weight: req.params.weight}) 
  })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  