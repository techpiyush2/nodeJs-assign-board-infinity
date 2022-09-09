const getAge = (req,res) =>{
    const dob = req.query
    const dateOfBirth =`${dob.year}-${dob.month}-${dob.date}`
    const myAge = (dob) => {
                let today = new Date();
                let birthDate = new Date(dob);
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
                    age--;
                }
                return age;
            }
    
    res.send(`Hello ${dob.name}, You are currently ${myAge(dateOfBirth)} years old. `)
}



const {vegetables} = require('../data')

const getVegetables = (req,res) =>{
     res.json({vegetables})
}


const getmetrics = (req,res) =>{
  let data = req.query.radius
  let radius = Number(data) 
  const area = 22/7*radius*radius
  res.json({area : area})
}


module.exports.getAge = getAge ;
module.exports.getVegetables = getVegetables ;
module.exports.getmetrics = getmetrics ;
