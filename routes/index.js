var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {email: null});
});

router.post('/mail', function(req, res, next){
  var object ={
    emails: newArray(req.body)
  }
  res.render('emails', object);
})

module.exports = router;


function newArray (thing){
  var thisthing = thing.people.split('\r\n');
  thisthing = thisthing.map(function(item){
    var obj = {};
    item = item.split(', ');
    obj["first"] = item[0];
    obj["last"] = item[1];
    obj["email"] = item[2];
    obj["subject"] = thing.subject;
    obj["content"] = thing.contnt;
    return obj;
  })
  return thisthing;
}
// {
//   emails:[
//     {
//       first: "Joe",
//       last: "Sylvester",
//       email: "bing@bong.com",
//     }
//   ],
//  subject: "content",
//  content: "content"
// }
// { people: 'Joe, Jones, ',
//   subject: '',
//   content: '',
//   preview: 'Preview' }
