import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="psy-mt text-center">
        <h1 class="display-4 mt-5">
          JavaScript
        </h1>
        <p> let's code with Psyduck</p>
        <button type="button" class="btn btn-outline-warning">Start</button>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
  h1{
    font-weight: 800;
}

.psy-mt{
    margin-top: 20%;
}`]
})
export class HomeComponent {


}
