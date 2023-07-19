import React from 'react';

export default function Example() {
    return (
        <div class="container">
           <div class="form-floating mt-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mt-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
            </div>
            <div class="text-center">
            <button type="button" class="btn btn-success mt-3">Submit</button>
            </div>
        </div>
    );
  }

