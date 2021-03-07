
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { IPedidoR } from '../../Models/IPedidoR.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dataSource: IPedidoR[];
  isProcessing = true;
  updatedPedido: IPedidoR[];
  addcantidad: number;
  closeResult = '';


  constructor( private api:ApiServiceService, private router:Router, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.api.getAllPedidos().subscribe(data =>{
      this.dataSource = data;
      this.isProcessing = false; 
    })
  }

  open(pedido: IPedidoR, content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(pedido, reason)}`;
    });
    
  }

  private getDismissReason(pedido: IPedidoR, reason: any): string {

    let updateCantidad = pedido.cantidad+this.addcantidad;
    this.api.actualizarPedido(pedido.pedido_Id, updateCantidad).subscribe(data =>{
      this.updatedPedido = data;
    });
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  nuevo(){
    this.router.navigate(['nuevo']);
  }

  deletePedido(pedido: IPedidoR) {
    this.api.borrarPedido( pedido.pedido_Id);
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
