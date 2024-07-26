export const loggedin = async (req,res)=>{
   
    console.log(req.userid);
    res.status(200).json({
        message : "you are Authenticated"
    });

    

}

export default {loggedin}