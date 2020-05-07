import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertCtrl: AlertController,

  ) {}

  openDialog() {
    this.showMsg("Sample Title","Welcome to Test");
    
  }


  async showMsg( title, msg ) {
    let alert = await this.alertCtrl.create( {
       header: title,
       message: msg,
       buttons: [ {text: "Press Me" } ]
    } );
    alert.present();
 }

}
