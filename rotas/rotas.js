const express = require('express')
const router = express.Router()
const methodOverride = require('method-override')
const controle = require('../controle/controle')



router.use(methodOverride('_method'))

router.get('/',  controle.allLink)
router.get('/add', (req, res)=>{res.render('add', {error: false, body: { } })}) 
router.get('/edit/:id', controle.loadLink)
router.get('/:title', controle.redirect )

router.post("/",  express.urlencoded({extended: true}), controle.ADDlink)
router.post('/edit/:id', express.urlencoded({extended: true}), controle.editLink)

router.delete('/:id', controle.deleteLink)

module.exports = router