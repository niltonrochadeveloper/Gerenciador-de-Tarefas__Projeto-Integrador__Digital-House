
const models = require('../models/')

const Quadros = models.Quadros
const Tarefas = models.Tarefas
const Usuarios = models.Usuarios
const Permissoes = models.Permissoes
const Rascunho = models.Rascunho
const Comentarios = models.Comentarios



const controller = {
    index: async (req, res) => {

        const todosOsQuadros = await Tarefas.findAll({
            include: [
                { association: "usuarios" },
                { association: "tags" },
                { association: "rascunhos" },               
                { association: "comentarios" }               
            ]
        })

        // console.log(todosOsQuadros)
        res.send(todosOsQuadros)

        // res.render('index', {
        //     title: 'Home',
        //     todosOsQuadros
        // })
    }
}


module.exports = controller


