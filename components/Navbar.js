import React from 'react';
import Link from 'next/link';
import { signIn, signOut,useSession } from 'next-auth/react';
const Navbar = () => {
    const { data: session } = useSession();
    if(session){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Movies</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/addmovie">Add</Link>
                </li>
            </ul>
                <div className="d-flex" role="search">
                <button className="btn btn-outline-dark"onClick={()=>signOut()} >Sign Out</button>
                </div>

            </div>
        </div>
        </nav>

    );
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Movies</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/home">Home</Link>
                </li>
            </ul>
                <div className="d-flex" role="search">
                <button className="btn btn-outline-dark" onClick={()=>signIn()}>Sign In</button>
                </div>

            </div>
        </div>
        </nav>

    );
};

export default Navbar;

