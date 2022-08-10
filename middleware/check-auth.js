const jwt =require("jsonwebtoken")

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split("")[1];
        console.log(token)
        if(!token){
            return res.status(400).send('token not fount')
        }
       let decode = jwt.verify(token,"ilovetocode")
      next();
    }catch(err){ 
    return res.status(401).json({"err":err})
    }
 
 

}