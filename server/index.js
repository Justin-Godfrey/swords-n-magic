const authCtrl = require("../server/auth_controllers");

require("dotenv").config();
const express = require("express"),
  session = require("express-session"),
  massive = require("massive"),
  aws = require('aws-sdk');

const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY_ID, S3_BUCKET } = process.env;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

// AWS S3 CONFIG
app.get('/sign-s3', (req, res) => {

    aws.config = {
      region: 'us-west-1',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
    
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
  
      return res.send(returnData)
    });
  });

app.post('/api/store/image', (req, res) => {
    const {url, description} = req.body;
    const db = req.app.get('db');
    db.upload_image({url, description}).then(() => {
        res.send('image uploaded')
    })
})

app.post("/auth/newUser", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.post('/api/comment', authCtrl.submitComment)
app.get('/all/comments', authCtrl.getComment)
app.delete('/api/comment/:id', authCtrl.deleteComment)
// app.delete('/api/comment', authCtrl.deleteComment)

massive(CONNECTION_STRING).then(database => {
  app.set("db", database);
  console.log("Database good to go!");
  app.listen(SERVER_PORT, () => console.log(`Hulk Smashing on ${SERVER_PORT}`));
});
