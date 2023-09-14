
const ErrorMiddleware = (err,req,res,next)=>{
    
  err.message = err.message || "Internal server error";
  err.statuscode = err.statuscode || 500;

  res.status( err.statuscode).json({
    success: false,
    message: err.message,
  });
}

export default ErrorMiddleware