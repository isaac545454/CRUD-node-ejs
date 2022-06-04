const Link = require('../models/modeloLink')


const redirect = async (req, res)=>{
      let titulo = req.params.title
       try{
       let doc = await Link.findOneAndUpdate({ titulo: titulo }, { $inc: { click: 1 }})
       
        res.redirect(doc.url)
       } catch(error){
           res.send(error)
       }
}

const ADDlink = async (req, res)=>{
    
    let link = new Link(req.body);
    try {
       let doc = await link.save()
       res.redirect('/')
    
    } catch (error) {
        res.render('add', {error, body: req.body})
    }
}
const allLink = async (req, res)=>{
  
    try {
       let docs = await Link.find({})
       res.render('all', { links: docs })
    } catch (error) {
        res.send(error)
    }
}

const deleteLink = async (req, res)=>{
    let id = req.params.id
    if(!id){
        id=req.body.id
    }
    try {
         await Link.findByIdAndDelete(id) 
         res.redirect('/')
    } catch (error) {
        res.status(404).send(error)
    }
}

const loadLink = async (req, res)=>{
    let id = req.params.id
    try {
      let doc =  await Link.findById(id)
      res.render('edit', {error: false, body: doc})
    } catch (error) {
         res.status(404).send(error)
    }
}
const editLink = async (req, res)=>{
    let link = {}
    link.titulo = req.body.titulo
    link.descrição = req.body.descrição
    link.url = req.body.url

    let id = req.params.id
    if(!id){
        id=req.body.id
    }
    
    try {
        
        let doc = await Link.updateOne( {_id: id }, link )
        res.redirect('/')
    } catch (error) {
        res.render('edit', {error, body: req.body})
    }
}


module.exports = { redirect, ADDlink, allLink, deleteLink, editLink, loadLink }