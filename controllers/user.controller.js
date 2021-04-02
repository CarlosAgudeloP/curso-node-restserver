const { response, request } = require('express');

const getUsers = (req = request, res = response) => {

    const {query, nombre, apikey, page = 1, limit = 10} = req.query;

    res.json({
        ok: true,
        msg: "get API - controller",
        query,
        nombre,
        apikey,
        page,
        limit
    })
};


const putUsers = (req, res) => {
    
    const id = req.params.id;
    
    res.json({
        ok: true,
        msg: "put API - controller",
        id
    })
};


const postUsers = (req, res) => {
    
    const { nombre, edad} = req.body;
    
    res.status(201).json({
        ok: true,
        msg: "post API - controller",
        nombre,
        edad
    })
};

const deleteUsers = (req, res) => {
    res.json({
        ok: true,
        msg: "delete API - controller"
    })
};

const patchUsers = (req, res) => {
    res.json({
        ok: true,
        msg: "patch API - controller"
    })
};

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}