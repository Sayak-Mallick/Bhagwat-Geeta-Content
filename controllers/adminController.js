const geetaOne = async(req,res)=>{
    res.send('Geeta 1');
}

const geetaTwo = async(req,res)=>{
    res.send('Geeta 2');
}

const geetaSetup = async(req,res)=>{
    res.send('New blog setup here');
}

module.exports = {
    geetaOne,
    geetaTwo,
    geetaSetup,
}