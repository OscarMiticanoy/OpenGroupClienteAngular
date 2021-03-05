import { Component, OnInit } from '@angular/core';
import { IPedidoR } from 'src/app/Models/IPedidoR.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private pedido: IPedidoR;

  constructor() {  }

  ngOnInit(): void {
  }



 
}
