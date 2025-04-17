export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Webhook received");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
