const admin = require('firebase-admin');

function isAuthenticated(req, res, next) {
  const idToken = req.headers.authorization; // You might send the Firebase ID token in the Authorization header

  if (!idToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken; // Attach the user to the request object
      next(); // User is authenticated, continue to the route
    })
    .catch((error) => {
      res.status(401).json({ error: 'Unauthorized' });
    });
}

module.exports = isAuthenticated;
