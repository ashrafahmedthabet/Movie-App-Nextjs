export default async function handler(req, res) {
  const { movieid } = req.query;
  if(req.method === 'GET'){
    const movie = await fetch(`http://localhost:3001/movies/${movieid}`);
    const data = await movie.json();
    res.status(200).json(data)

}else if(req.method === 'DELETE'){
  await fetch(`http://localhost:3001/movies/${movieid}`, {
    method: "DELETE",
    headers: {
    "Content-type": "application/json",
  }
  });
  res.status(200).json(deletedmovie);
}
}
