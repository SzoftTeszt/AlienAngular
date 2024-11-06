import { Component } from '@angular/core';
import { BaseService } from './base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlienFrontend';
  aliens:any
  newAlien:any={}
  columns=[
    {key:"name", text:"A faj neve", type:"text"},
    {key:"attitude", text:"Viselkedés", type:"text"},
    {key:"civilizationAge", text:"A civilizáció kora", type:"number"}
  ]

  constructor(private base:BaseService){
    base.getAliens().subscribe(
      (res) => this.aliens=res
    )
  }

  postAlien(){
    this.base.postAlien(this.newAlien).subscribe()
  }

  putAlien(alien:any){
    this.base.putAlien(alien).subscribe()
  }

  deleteAlien(alien:any){
    this.base.deleteAlien(alien).subscribe()
  }

}
