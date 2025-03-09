const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())
const PORT = 5000;
mongoose.connect("DBLink").then(() => console.log('MongoDB connected')).catch(err => console.log("oops",err));


const LoginSchema = new mongoose.Schema({
    email: String,
    otp: Number,
    password: String
});
const LoginModel = mongoose.model('Login', LoginSchema);


// const insert =async()=>{
//     await LoginModel.create({
//         email:"SkarTheGoat",
//         otp:65431,
//         password:"wwwwwww"
//     })
// }
// insert();

// http.listen(5000,(req,res)=>{
//     console.log("Server started Succesfully Skar")
// })

app.post('/add', async (req, res) => {
    try {
        const { email, otp, password } = req.body;
        const newData = new LoginModel({ email, otp, password });
        await newData.save();
        res.status(201).json({ message: 'Data saved successfully', data: newData });
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
