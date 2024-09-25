const jwt = require('jsonwebtoken');


class JwtBearerMiddleware {
    constructor(secretKey) {
        this.secretKey = secretKey; // Store the secret key
        this.authenticate = this.authenticate.bind(this); 
    }

    // Middleware method
    async authenticate(req, res, next) {
        // Extract the bearer token from the Authorization header
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization header is missing or malformed' });
        }

        const token = authHeader.split(' ')[1]; // Extract the token part

        // Verify the token using the secret key
        jwt.verify(token, this.secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token is invalid or expired' });
            }

            // Attach the decoded payload to the request for further use
            req.user = decoded;
            

      // Proceed to the next middleware or route handler
      next();// Proceed to the next middleware or route handler
        });
    }
}

module.exports = JwtBearerMiddleware;