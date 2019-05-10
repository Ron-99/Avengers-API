'use strict';
const mongoose = require('mongoose');

const Avenger = mongoose.model('Avenger');

module.exports = {
    async index (req, res){
        try{
            const avengers = await Avenger.find();
            res.status(200).send(avengers);
        }catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    },

    async show (req, res){
        try{
            const avenger = await Avenger.findById(req.params.id);
            res.status(200).send(avenger);
        }catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    },

    async store (req, res){
        try{
            const avenger = await Avenger.create(req.body);
            res.status(201).send(avenger);
        }catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    },

    async update(req, res){
        try{
            const avenger = await Avenger.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).send(avenger);
        }catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    },

    async destroy (req, res){
        try{
            const avenger = await Avenger.findOneAndRemove(req.params.id);
            res.status(200).send(avenger);
        }
        catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }   
    }
}