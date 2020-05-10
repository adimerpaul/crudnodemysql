const express=require('express');
const router=express.Router();
const pool=require('../database');
router.use(express.urlencoded({extended:false}));
router.use(express.json());
router.get('/',async (req,res)=>{
    var usuarios=await pool.query("SELECT * FROM usuario");
    // console.log(usuarios);
    res.render('pages/index',{usuarios:usuarios});
});
router.post('/guardar',async (req,res)=>{
    // console.log(req.body);
    await pool.query("INSERT INTO usuario SET ?",[req.body]);
    res.redirect('/');
});
router.post('/modificar',async (req,res)=>{
    // console.log(req.body);
    await pool.query("UPDATE usuario SET nombre=?,cargo=? WHERE idusuario=?",[req.body.nombre,req.body.cargo,req.body.idusuario]);
    res.redirect('/');
});
router.get('/delete/:id',async (req,res)=>{
    // console.log(req.params.id);
    await pool.query("DELETE FROM usuario  WHERE idusuario=?",[req.params.id]);
    res.redirect('/');
    // res.send('a');
});
module.exports=router;
