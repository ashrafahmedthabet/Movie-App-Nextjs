export default async function handler(req,res){
    if(req.method === 'GET'){
        const movies = await fetch(`http://localhost:3001/movies`);
        const data = await movies.json();
        res.status(200).json(data)

    }else if(req.method === 'POST'){
        const movie = req.body;
        await fetch("http://localhost:3001/movies", {
            method: "POST",
            headers: {
            "Content-type": "application/json",
          },
            body: JSON.stringify(movie),
          });
       res.status(200).json(movie)
    }
}