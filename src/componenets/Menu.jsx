import  React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Customer Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" >Contact</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customer
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/add-customer">Add Customer </Link></li>
            <li><Link class="dropdown-item" to="/view-all-customers" >View All Customer</Link></li>
            <li><Link class="dropdown-item" to="/view-single-customer">View Single Customer</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}