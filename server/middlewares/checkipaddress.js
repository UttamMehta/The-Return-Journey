const ipinfo = require('ipinfo');

async function checkipaddress(req, res, next) {
    try {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const ipDetails = await ipinfo(ip);

        if (ipDetails.ip) {
        next();
        }
        else{
        return res.status(400).send({error:'Invalid IP address'});
        }
    
      } catch (error) {
        console.error('Error validating IP address:', error);
        res.status(500).send('Internal server error');
      }
  }
  
  
  module.exports = checkipaddress;