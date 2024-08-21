export const validateToken=(req,res,next)=>{
    const user=decodeToken(req.headers.authorization)
    if (!user) {        
        return res.status(401).send({message:`User is not authorized`})
    }

    const dateToCompare = new Date(user.exp * 1000);

    const newDate = new Date(); 

    const isExpired = newDate > dateToCompare;

    if (isExpired) {
        return res.status(401).send({message:`User is not authorized`})
    }
    next()
    
}


export const decodeToken=(token)=>{
    const decodedToken= jwt.decode(token, process.env.JWT_SECRET)

    if (!decodedToken) {
        return null
    }

    return decodedToken
}