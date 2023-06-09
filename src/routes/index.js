const { Router } = require("express");

const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();
routes.use("/users", usersRoutes); //Quem acessar o "/users" vai ser chamado a "usersRoutes"
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);
routes.use("/sessions", sessionsRoutes);

routes.use('/health', (req, res) => {
    res.send('<h1>All well</h1>')
})

module.exports = routes;
