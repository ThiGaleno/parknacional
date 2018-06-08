import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('map') mapRef: ElementRef; //não sei pra que serve, mas tem que ter

  constructor(public navCtrl: NavController) { 

  }
  ionViewDidLoad(){
     console.log(this.mapRef); 
     this.showMap();
  }
  showMap()
  {
    const location = new google.maps.LatLng(51.507351,-0.127758); //localização em latitude e longitude 

    //opções de mapa
    const options = 
    {
      center: location,
      zoom: 10,
      streetViewControl: false,
      mapTypeId: 'satellite' //tipo de mapa, satellite, roadmap, hybrid, terrain
    }
    
    const map = new google.maps.Map(this.mapRef.nativeElement,options)
    this.addMarker(location, map) //chamar marcação
  }

  //Marcação no mapa
  addMarker(position, map)
  {
    return new google.maps.Marker
    ({
      position,
      map
    });
  }


}
