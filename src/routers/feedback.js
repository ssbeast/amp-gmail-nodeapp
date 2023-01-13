const express = require('express');
const router = new express.Router()

router.get('/', (req, res) => {
    console.log(req.query);
    return res.status(200).json({
    message: 'Get request for feedback',
  });
});

router.post('/feedback', (req, res) => {

    console.log(req.query);
    
    /**
     * Setting CORS headers in the response for AMP requests coming from the gmail.
     */
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'https://mail.google.com');
    res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'amp@gmail.dev');
    res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');

    var body = { 
      nameResponse : req.body.name, 
      emailResponse : req.body.email,
      feedbackResponse : req.body.feedback  
    };

    console.log(body)
                
    res.send(body);
    });

module.exports = router;