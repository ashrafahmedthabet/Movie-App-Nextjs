import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {getSession} from 'next-auth/react'

const AddMovie = () => {
  const [newMovie , setNewMovie]= useState({id:uuid()});
  const router=useRouter();
  const handleChange = (e)=> {
      setNewMovie((oldState)=>{
         return {...oldState , [e.target.name]:e.target.value}
      })  
    }
    const  handleSubmit = async (e)=> {
      e.preventDefault();
      await fetch("http://localhost:3000/api/movies", {
      method: "POST",
      headers: {
      "Content-type": "application/json",
    },
      body: JSON.stringify(newMovie),
    });
    router.push("/home")
    }
  return (
    <>
      <form method="POST"  className="col-md-5 mx-auto mt-1">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder=""
            name="title"
            onChange={handleChange}
          ></input>
          <label htmlFor="backdrop_path" className="form-label">
          Image Source
          </label>
          <input
            type="text"
            className="form-control"
            id="backdrop_path"
            placeholder=""
            name="backdrop_path"
            onChange={handleChange}
          ></input>
          <label htmlFor="popularity" className="form-label">
          Popularity
          </label>
          <input
            type="number"
            className="form-control"
            id="popularity"
            placeholder=""
            name="popularity"
            onChange={handleChange}
          ></input>
          <label htmlFor="vote_average" className="form-label">
            Vote_average  
          </label>
          <input
            type="number"
            className="form-control"
            id="vote_average"
            placeholder=""
            name="vote_average"
            onChange={handleChange}
          ></input>
          <label htmlFor="vote_count" className="form-label">
          Vote_count
          </label>
          <input
            type="number"
            className="form-control"
            id="vote_count"
            placeholder=""
            name="vote_count"
            onChange={handleChange}
          ></input>
          <label htmlFor="release_date" className="form-label">
          Release_date
          </label>
          <input
            type="date"
            className="form-control"
            id="release_date"
            placeholder=""
            name="release_date"
            onChange={handleChange}
          ></input>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Overview
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            name="overview"
            onChange={handleChange}
          ></textarea>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100 mt-2">Add New </button>
      </form>
    </>
  );
};
export default AddMovie;
export async function getServerSideProps(context){
  const session  = await getSession(context);
  if(!session){
      return{
          redirect : {
                destination : `/api/auth/signin?callbackurl=/addmovie`,
                permanent :false
          }
      }
  }
  return {
    props: {},
  }
}