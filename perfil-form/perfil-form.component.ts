import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent {

  perfil: any = {
    perfis: 'Marco',
  }
  
  onSubmit() {
    console.log(this.perfil);
}

constructor() {

}

ngOnInit(){

}

}
