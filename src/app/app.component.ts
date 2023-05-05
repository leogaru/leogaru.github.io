import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'F.VenturiAngular';  

  setDeviceType = () => {
    console.log("Inside setDeviceType")
    const ua = navigator.userAgent;
    if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)){
        console.log("tablet")
        return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accellerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)){
        console.log("Mobile set")
        return "mobile";
    }
    else {
      return "desktop";
    }
  }
  type = this.setDeviceType()

}
