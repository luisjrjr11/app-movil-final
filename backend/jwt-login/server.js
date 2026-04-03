const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const SECRET_KEY = "clave_secreta";

const usuario = {
    id: 1,
    username: "admin",
    password: "1234"
};

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === usuario.username && password === usuario.password) {

        const token = jwt.sign(
            { id: usuario.id, username: usuario.username },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login exitoso",
            token: token
        });

    } else {

        res.status(401).json({
            message: "Credenciales incorrectas"
        });

    }

});

function verificarToken(req, res, next) {

    const header = req.headers["authorization"];

    if (!header) {
        return res.status(403).json({ message: "Token requerido" });
    }

    const token = header.split(" ")[1];

    jwt.verify(token, SECRET_KEY, (err, decoded) => {

        if (err) {
            return res.status(401).json({ message: "Token inválido" });
        }

        req.usuario = decoded;

        next();
    });

}

app.get("/perfil", verificarToken, (req, res) => {

    res.json({
        message: "Acceso permitido",
        usuario: req.usuario
    });

});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000");
});