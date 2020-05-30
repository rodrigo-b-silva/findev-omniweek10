const Devs = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    //Buscar todos os devs em um raio (latitude, longitude) com base em tecnologia
    async index(req, res){
        
        const { latitude, longitude, techs } = req.query;

        const techArrays = parseStringAsArray(techs)

        //A filtragem da localização é feita com um parametro $near que recebe o ponto de localização
        //e uma distancia maxima em metros que simboliza o raio
        const devs = await Devs.find({
            techs: {
                $in: techArrays
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                },
            }
        });

        res.json(devs);
    }

}