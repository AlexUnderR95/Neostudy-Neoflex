const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res)
{
    res.sendFile( __dirname + '/base.html')
})


app.post('/', function(req, res)
{

    if (req.body.operation == "*")
    {
        resolt = Number(req.body.fitstValue) * Number(req.body.secondValue);

      res.send('<center>'+'<h4> Result is:  </h4>' + '<h3>' + resolt + '</h3>' + '</center>');
    }
    else
    {
        if (req.body.operation == "+")
        {
            resolt = Number(req.body.fitstValue) + Number(req.body.secondValue);

            res.send('<center>'+'<h4> Result is:  </h4>' + '<h3>' + resolt + '</h3>' + '</center>');
        }
        else
        {
            if (req.body.operation == "-")
            {
                resolt = Number(req.body.fitstValue) - Number(req.body.secondValue);

                res.send('<center>'+'<h4> Result is:  </h4>' + '<h3>' + resolt + '</h3>' + '</center>');
            }
            else
            {
                if (req.body.operation == "/")
                {
                    if (Number(req.body.secondValue) == 0)
                    {
                        res.send('<center>'+'<h4>  Imposible operation  </h4>' + '</center>');       
                    } 
                    else
                    {
                        resolt = Number(req.body.fitstValue) / Number(req.body.secondValue);

                        res.send('<center>'+'<h4> Result is:  </h4>' + '<h3>' + resolt + '</h3>' + '</center>');
                    }
                }
                else
                {
                    res.send('<center>'+'<h4> Unknown operation  </h4>' + '</center>')
                }
            }
        }
   }
})

app.listen(6400, function()
{
    console.log('You are now listening on port 6400')
})