const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const db = "_________";



function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    },
    {
      "_id": "2",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    },
    {
      "_id": "3",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    },
    {
      "_id": "4",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    },
    {
      "_id": "5",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    },
    {
      "_id": "6",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    },
    {
      "_id": "7",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    },
    {
      "_id": "8",
      "name": "Golmaal",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Comedy"
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    },
    {
      "_id": "2",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    },
    {
      "_id": "3",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    },
    {
      "_id": "4",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    },
    {
      "_id": "5",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    },
    {
      "_id": "6",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    },
    {
      "_id": "7",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    },
    {
      "_id": "8",
      "name": "Singam 3",
      "description": "2hr 40min | 2010 | U/A 13",
      "type": "Action"
    }
  ]
  res.json(specialEvents)
})

router.post('/login', (req, res) => {
    let userData = req.body
    
    if ((userData.email == "bhushan") && (userData.password == "123")) //user name and pass
    {
      let payload = {subject: 1}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})   
    } 
    else 
    {
        res.status(401).send('Invalid Password')
    } 
})

module.exports = router;