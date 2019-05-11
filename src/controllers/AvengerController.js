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
            //const avenger = await Avenger.findOneAndRemove(req.params.id);
            
            const procurar = await Avenger.find().select('_id');

            let i = 0;
            let metade = [];

            const tam = procurar.length % 2 == 0 ? procurar.length + 1 : procurar.length - 1;

            while(i < tam / 2){
                metade.push(procurar[Math.floor(Math.random() * procurar.length)]._id);
                i++;
            }

            const avengers = await Avenger.deleteMany( { _id:{ $nin: metade} });

            res.status(200).send(avengers);
        }
        catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }   
    }
}