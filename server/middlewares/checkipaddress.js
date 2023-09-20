

async function checkipaddress(req, res, next) {
    try {
        const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        req.clientIp = clientIp; // Attach the IP address to the request object
        next();
    } catch (error) {
        console.log("Error in 9th line checkipaddress");

        return res.status(401).send({error:"wrong ip address"});
    }
 
  }
  
  
  
  
  module.exports = checkipaddress;