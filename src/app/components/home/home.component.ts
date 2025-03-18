import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService)
  nome = "eduardo";
  idButton= "123";
  // meuBoleano = false;
  // atualizaBoleano(valor:boolean){
  //   this.meuBoleano = valor;
  // }
  deveMostrarTitulo = false;
  listItens = ["um","dois","tres"]

  submit(){
    this.emitindoValorName.emit(this.nome)
    this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao")
  }

  @Input("name") minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();
}
