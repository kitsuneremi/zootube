const Channel = require('../models/Channel');
const Video = require('../models/Video');
const sql = require('mssql')

async function searchx(slug, next) {
    
}

class LoginController {
    async search(req, res, next) {
        if (req.params.slug != '') {
            let r = {};
            await Video.find({})
                .lean()
                .then(video => {
                    r.video = video;
                })
                .catch(next)
            await Channel.find({ slug: req.params.slug })
                .lean()
                .then(channel => {
                    r.channel = channel;
                })
                .catch(next)
            console.log(r)
            res.json(r)
        }
    }

    
}

module.exports = new LoginController();