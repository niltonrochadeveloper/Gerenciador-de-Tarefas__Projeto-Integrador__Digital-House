
const models = require('../models/')

const Quadros = models.Quadros
const Tarefas = models.Tarefas
const Usuarios = models.Usuarios
const Permissoes = models.Permissoes
const Rascunho = models.Rascunho
const Comentarios = models.Comentarios



const controller = {
    index: async (req, res) => {

        const todosOsQuadros = await Quadros.findAll({
            include: [
                { 
                    association: "tarefas",
                    include: [
                        {
                            association: "usuarios"
                        },
                        {
                            association: "tags"
                        },
                        {
                            association: "rascunhos"
                        },
                        {
                            association: "comentarios",
                            include: [
                                {
                                    association: "usuarios"
                                }
                            ]
                        }
                    ]
                }          
            ]
        })

        // console.log(todosOsQuadros[0].tarefas)
        // res.send(todosOsQuadros)

        res.render('index', {
            title: 'Home',
            todosOsQuadros
        })
    }
}


module.exports = controller


