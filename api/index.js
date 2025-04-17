// api/webhook.js
module.exports = (req, res) => {
  // Handle verification request
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    
    // Replace this with your own verification token
    const VERIFY_TOKEN = 'my_webhook_token_123';
    
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send('Verification failed');
    }
  }
  
  // Handle regular webhook events
  return res.status(200).json({ status: 'ok' });
}
