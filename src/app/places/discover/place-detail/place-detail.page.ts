import { PlacesService } from './../../places.service';
import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place: Place;
  constructor(private router: Router ,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private placeService: PlacesService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRouter.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }

      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    /// this.router.navigateByUrl('/places/tabs/discover');
   // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();

    this.modalCtrl.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}})
    .then(modalElement => {
      modalElement.present();
      return modalElement.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
         console.log('BOOKED!');
      }
    });

  }

}

