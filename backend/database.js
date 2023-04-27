const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const path = require("path");

// app.use(express.static(path.join(__dirname, 'Calculator/public')));
// app.use(express.static('Calculator'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/Carbon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
    })
    .then(() => {
        console.log('Connected to database!');
    })
    .catch((error) => {
        console.error('Error connecting to database:', error.message);
});

const carbonSchema = new mongoose.Schema({
	week_no: Number,
	name: String,
	date: String,
	food_consumption: Number,
	food_wastage: Number,
	fuel_consumption: Number,
	electricity_usage: Number
  });

const Carbon = mongoose.model('Carbon', carbonSchema);

app.use(express.static(path.join(__dirname, '/Calculator')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/form.html', (req, res) => {
    res.render('/form.html');
  });

app.post('/form.html', (req, res) => {
	const carbon = new Carbon({
		week_no: req.body.week_no,
		name: req.body.name,
		date: req.body.date,
		food_consumption: req.body.food_consumption,
		food_wastage: req.body.food_wastage,
		fuel_consumption: req.body.fuel_consumption,
		electricity_usage: req.body.electricity_usage
	  });
	// Save form data to database
	carbon.save()
    .then(() => {
      res.redirect('/result.html');
    })
    .catch(err => console.log(err));
});

// Route to handle retrieving form data from the database
app.get('/form-data', async(req, res) => {
	try	{
		const data = await Carbon.find({});
		res.render('/result.html', { carbonData: data });
	}
	catch(err)
	{
		console.log(err);
	}
});
  

app.listen(3000, function() {
    console.log("exptess is working");
})