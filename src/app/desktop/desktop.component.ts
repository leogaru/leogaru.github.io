import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  table1 = true
  table2 = false
  table3 = false
  map = false
  elementHeight = 0

  interniCivili= true
  esterni = false
  clinici= false
  industriali = false
  stradali = false
  videoSorveglianza = false
  allarmiIncendio = false
  allarmiAntintrusione = false
  reteDati = false
  
  value = ""
  
  changeTableButton(element: string){
    this.interniCivili= false
    this.esterni = false
    this.clinici= false
    this.industriali = false
    this.stradali = false
    this.videoSorveglianza = false
    this.allarmiIncendio = false
    this.allarmiAntintrusione = false
    this.reteDati = false
    switch (element){
      case element = "interniCivili":
        this.interniCivili= true
        break
      case element = "esterni":
        this.esterni= true
        break
      case element = "clinici":
        this.clinici= true
        break
      case element = "industriali":
        this.industriali= true
        break
      case element = "stradali":
        this.stradali= true
        break
      case element = "videoSorveglianza":
        this.videoSorveglianza= true
        break
      case element = "allarmiIncendio":
        this.allarmiIncendio= true
        break
      case element = "allarmiAntintrusione":
        this.allarmiAntintrusione= true
        break
      case element = "reteDati":
        this.reteDati= true
        break
      }
    this.value = element
  }

  checkLog(){
    console.log("Funziona")
  }
  showMap(){
    this.map= !this.map
  }
}
