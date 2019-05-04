import { Component, OnInit, ViewChild } from '@angular/core';
declare let google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map') mapElement;
  map:any;

  constructor() { }

  ngOnInit() {

    let latLng = new google.maps.LatLng(-27.553097, 153.052143);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map:this.map,
        animation:google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      let infoWindow = new google.map.infoWindow({
        content: '<h4>2701ICT</h4>'
      });

      google.maps.event.addListener(marker,'click',()=>{
        infoWindow.open(this.map,marker);
      });

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
          let pos = {
            lat:position.coords.latitude,
            lng:position.coords.longitude
          }
        });
      }else{
        alert("Geolcation not supported");
      }
    }
}
