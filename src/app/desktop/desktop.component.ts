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
  show(nr: number){
    switch (nr){
      case nr = 1 : {
        this.table1 = !this.table1
        break
      }
      case nr = 2 : {
        this.table2 = !this.table2
        break
      }
      case nr = 3 : {
        this.table3 = !this.table3
      }
    }
    var element = document.querySelector("#table"+nr)
    var elementHeight = document.querySelector<HTMLElement>("#table"+nr)!.offsetHeight!;
    console.log(elementHeight)
    if (elementHeight > 0){
        document.getElementById("table"+nr)!.style.maxHeight="0px"
        document.getElementById("table"+nr)!.style.fontSize="0px"
        document.getElementById("innerTable"+nr)!.style.borderLeft="0px dotted rgb(24 25 108)"
        document.getElementById("innerTable"+nr)!.style.borderRight="0px dotted rgb(24 25 108)"
        if (nr == 2){
            document.getElementById("hidetable"+nr)!.style.transition="all 0.5s cubic-bezier(0.1, 0.84, 0.12, 0.98)"
            document.getElementById("hidetable"+nr)!.style.fontSize="0px"
        }
        document.getElementById("table"+nr)!.style.transition="all 0.5s cubic-bezier(0.1, 0.84, 0.12, 0.98)"
    }
    else if (elementHeight == 0){
        document.getElementById("table"+nr)!.style.maxHeight="1000px"
        document.getElementById("table"+nr)!.style.fontSize="20px"
        document.getElementById("innerTable"+nr)!.style.borderLeft="5px dotted rgb(24 25 108)"
        document.getElementById("innerTable"+nr)!.style.borderRight="5px dotted rgb(24 25 108)"
        if (nr == 2){
            console.log("hidetable"+nr)
            document.getElementById("hidetable"+nr)!.style.transition="all 1s cubic-bezier(0.1, 0.84, 0.12, 0.98)"
            document.getElementById("hidetable"+nr)!.style.fontSize="20px"
        }
        document.getElementById("table"+nr)!.style.transition="all 1s cubic-bezier(0.1, 0.84, 0.12, 0.98)"
    }
    if ( nr== 3) {
      this.showMap() 
    }
  }

  showMap(){
    this.map= !this.map
  }
}
