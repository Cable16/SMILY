const express = require ("express");
const mysql=require (`mysql2`);
const app = express ();
const conexion = mysql.createConnection ({

    host:'localhost',
    user: 'root',
    password: 'Golem.deagua',
    database: 'practicas'
});

conexion.connect((err) => {

    if (err){
        throw err;
    }
    else{
        console.log('Conexion exitosa');
    }
    app.use(express.json());
    app.post('/prod', (req,res) => {

        data={Id_producto: req.body.Id_producto, 
            id_tipo: req.body.id_tipo,
            descripcion: req.body.descripcion,
            precio_compra: req.body.precio_compra,
            precio_venta: req.body.precio_venta,
            cantidad: req.body.cantidad
            }
            let sql = 'insert into Tproducto set?';
            conexion.query (sql,data,(err,resul) => {
                if (err){
                console.log(err.message);
                res.json({mensaje:`Error inesperado`});
                }
                else {
                    res.json(resul);
                }

            });
    }); 

});

app.get('/prod', (req,res) => {

    let sql= 'Select Id_producto, id_tipo,descripcion, precio_compra, precio_venta,cantidad,activo from tproducto';

        conexion.query (sql, (err,result) => {
            if (err){
            console.log(err.message);
            res.json({mensaje:`Error inesperado`});
            }
            else {
                res.json(result);
            }

        });
}); 

app.listen(5000,() => {
    console.log("SERVIDOR OK en puerto 5000");
    }); 


