import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class TemplateFormComponent implements OnInit {
  
  usuario: any = {
    nome: 'Marco',
    cpf: '897.654.321-78',
    dtnas: '17/10/1971',
    sexo: 'M',
    cargo: 'Maior',
    perfil: 'Perfil 2'
  }

  onSubmit() {
    console.log(this.usuario);
}

constructor() {

}

ngOnInit(){

}

}
