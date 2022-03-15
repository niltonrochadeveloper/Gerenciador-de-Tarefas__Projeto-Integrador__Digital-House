
const models = require('../models/')

const Quadros = models.Quadros
const Tarefas = models.Tarefas
const Usuarios = models.Usuarios
const Permissoes = models.Permissoes



const controller = {
    index: async (req, res) => {

        const todosOsQuadros = await Quadros.findAll({
            include: [
                { association: "tarefas" },
            ]
        })

        // console.log(todosOsQuadros)
        // res.send(todosOsQuadros)

        res.render('index', {
            title: 'Home',
            todosOsQuadros
        })
    }
}


module.exports = controller


