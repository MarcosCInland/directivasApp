import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });
  msg   : string = 'Debe de ingresar este campo';
  color : string = 'red';
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));;
  }

  cambiarNombre() {
    this.msg = Math.random().toString();
  }

}
