
const models = require('../models/')

// const Areas = models.Areas
// const Quadros = models.Quadros
// const Tarefas = models.Tarefas
// const Usuarios = models.Usuarios
// const Permissoes = models.Permissoes
// const Rascunhos = models.Rascunho
// const Comentarios = models.Comentarios



const controller = {
    index: async (req, res) => {

        const todosOsQuadros = await models.Quadros.findAll({
            // include: [
            //     {
            //         association: "usuarios"
            //     },
                // {
                    // association: "quadros",
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
            //     }
            // ]

            
        })

        // console.log(todosOsQuadros[0].quadros)
        // res.send(todosOsQuadros)

        res.render('index', {
            title: 'Home',
            todosOsQuadros
        })
    }
}


module.exports = controller


