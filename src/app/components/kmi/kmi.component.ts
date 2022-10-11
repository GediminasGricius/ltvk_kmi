import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmi',
  templateUrl: './kmi.component.html',
  styleUrls: ['./kmi.component.css']
})
export class KmiComponent implements OnInit {
  public ugis:number|null = null;
  public svoris:number|null = null;
  public kmi = "";
  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuok(){
    if (this.ugis!=null && this.svoris!=null){
      this.kmi=(this.svoris/((this.ugis/100)**2)).toFixed(2);
    }
  }

}
