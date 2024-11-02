const ErrorMiddleware=(err,req,res,next)=>{
    error.statusCode=error.statusCode ||  500;
    err.message=err.message ||"Internal Server Error"
    res.status(error.statusCode).json({
        success:false,
        message:err.message
    })
}
export default ErrorMiddleware;