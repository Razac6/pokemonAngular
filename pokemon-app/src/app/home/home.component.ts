import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="home-page">
  <div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="psy-mt text-center">
        <h1 class="display-4 mt-5">
          JavaScript
        </h1>
        <p> let's code with Psyduck</p>
        <button type="button" routerLink="/dashboard" class="btn btn-outline-warning">Start</button>
      </div>
    </div>
  </div>
</div>
</div>
  `,
  styles: [`
  .home-page{
    background-color: #fdd537;
    font-family: 'Josefin Sans', sans-serif;
    color: #222;
    weight:100%;
    height: 100vh;
    font-weight: bold;
    background-image: url('../../assets/img/bg-Psyduck.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 200px;
}
  h1{
    font-weight: 800;
}

.psy-mt{
    margin-top: 20%;
}

button{
  cursor: pointer;
}

`]
})
export class HomeComponent {


}
