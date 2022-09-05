import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color  : string = 'red';
  private _mensaje: string = 'El campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  //Valores por defecto
  //Se ejecuta cuando cambian
  @Input() set color (value: string) {
    this._color = value;
    this.setColor();
    
  }
  @Input() set mensaje(value: string) {
    this._mensaje = value;
    this.setMensaje();
  }

  @Input() set valido(value: boolean) {
    value ? this.htmlElement.nativeElement.classList.add('hidden') : this.htmlElement.nativeElement.classList.remove('hidden');
  }
  
  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
   }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
