const SearchCheck =(req,res,next)=>
    {
        
  const { query } = req;
  const searchTerm = query.term; 

  if (!searchTerm || searchTerm.length < 4) {
    return res.status(400).json({ error: 'Query parameter "term" must be at least 4 characters long.' });
  }
    
        next();
    }

    module.exports={
      SearchCheck
    }