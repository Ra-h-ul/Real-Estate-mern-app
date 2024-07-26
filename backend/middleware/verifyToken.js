import  JWT  from "jsonwebtoken";

export const verifyToken =async (req,res,next)=>
{
    const token = req.cookies.token;

    // token does not exist
    if(!token) return res.status(400).json({
        message : "Not Authenticated"
    });

    // token exist and is not expired
    JWT.verify(token,process.env.JWT_KEY ,
        async(err,payload)=>{
            if(err) return res.status.json({
                message:"Token is expired"
            });
        console.log(req);
        req.userid = payload.id
        next();

        });
    
    
}
