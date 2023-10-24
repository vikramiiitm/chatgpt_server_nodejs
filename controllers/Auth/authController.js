const admin = require('../../config/firebase-config');

async function registerWithEmail(req, res) {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    // generating verification link, need to send the link using email(#TODO)
    const link = await admin.auth().generateEmailVerificationLink(email);
    console.log(link)

    res.status(201).json({ message: 'User registered successfully', user: userRecord, 'link': link });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).json({ error: 'Registration failed' });
  }
}

async function resendEmailVerification(req, res) {
    const { email } = req.body;
  
    try {
      // Check if the user with the provided email exists
      const userRecord = await admin.auth().getUserByEmail(email);
  
      if (!userRecord.emailVerified) {
        // User's email is not verified, send the verification link
        const link = await admin.auth().generateEmailVerificationLink(email);
  
        // Send the verification email
        //TODO
        // Example: await sendVerificationEmail(email, link);
  
        res.status(200).json({ message: 'Email verification link sent successfully' });
      } else {
        // User's email is already verified
        res.status(400).json({ error: 'Email is already verified' });
      }
    } catch (error) {
      console.error('Error resending verification email:', error);
      res.status(400).json({ error: 'Failed to resend verification email' });
    }
  }

async function signInEmail(req, res) {
    const { email, password } = req.body;
    console.log(email, password)
    try {
      const user = await admin.auth().signInWithEmailAndPassword(email, password);
  
    //   if (!user.emailVerified) {
    //     return res.status(400).json({ error: 'Your email has not been verified.' });
    //   }
  
      res.status(200).json({ message: 'Sign-in successful', user });
    } catch (error) {
      console.error('Error signing in user:', error);
      res.status(401).json({ error: 'Authentication failed' });
    }
  }

async function googleSignIn(req, res) {
  const idToken = req.body.idToken;

  try {
    const user = await admin.auth().verifyIdToken(idToken);

    res.status(200).json({ message: 'Sign-in successful', user });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
}

module.exports = {
  registerWithEmail,
  signInEmail,
  googleSignIn,
};
