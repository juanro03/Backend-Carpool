import express from 'express';
import usuarioService from "../services/usuario.service.js";

const router = express.Router();

router.get("/get", async (req, res) => {
    try {
        const usuarios = await usuarioService.getUsuarios();
        console.log('usuarios obtenidos');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await usuarioService.getUsuarioById(id);

        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado con dicha id' });
            return;
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
});

router.post('/new', async (req, res) => {
    try {
        const usuario = await usuarioService.postUsuario(req.body);
        res.json(usuario);
    } catch (error) {
        console.error("Error al insertar el usuario:", error);
        res.status(500).json({ error: "Error al insertar el usuario" });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUsuario = await usuarioService.deleteUsuario(id);
        res.json(deletedUsuario);
    } catch (error) {
        console.error('Error al eliminar el usuario');
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

const usuarioController = { router };

export default usuarioController;
