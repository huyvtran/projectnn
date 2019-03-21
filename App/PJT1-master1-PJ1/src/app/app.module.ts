import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CallNumber } from '@ionic-native/call-number';
import { SN1 } from '../pages/sn1/sn1';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import {InfouserPage} from '../pages/infouser/infouser';
import { P2Page } from '../pages/p2/p2';
import { P3Page } from '../pages/p3/p3';
import { P4Page } from '../pages/p4/p4';
import { P5Page } from '../pages/p5/p5';
import { P6Page } from '../pages/p6/p6';
import { P7Page } from '../pages/p7/p7';
import { P8Page } from '../pages/p8/p8';
import { InputgamePage } from '../pages/inputgame/inputgame';
import { RegisterPage } from '../pages/register/register';
import { ShowmePage } from '../pages/showme/showme';
import { CreatethemePage } from '../pages/createtheme/createtheme';
import { ResultsymPage } from '../pages/resultsym/resultsym';
import { ShowdrugPage } from '../pages/showdrug/showdrug';
import { SearchPage } from '../pages/search/search';
import { GamedocPage } from '../pages/gamedoc/gamedoc';
import { ListpatPage } from '../pages/listpat/listpat';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ShowdocPage } from '../pages/showdoc/showdoc';
import { MenudoctorPage } from '../pages/menudoctor/menudoctor';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { StorydocPage } from '../pages/storydoc/storydoc';
import { CreatstoryPage } from '../pages/creatstory/creatstory';
import { EditstoryPage } from '../pages/editstory/editstory';
import { QapostPage } from '../pages/qapost/qapost';
import { ShowdatapatPage } from '../pages/showdatapat/showdatapat';
import { P5detailPage } from '../pages/p5detail/p5detail';
import { EditdrugPage } from '../pages/editdrug/editdrug';
import { EditdatPage } from '../pages/editdat/editdat';
import { StorybydocPage } from '../pages/storybydoc/storybydoc';
import { EditgamebydocPage } from '../pages/editgamebydoc/editgamebydoc';
import { MapPage } from '../pages/map/map'; 
import { GoogleMapComponent } from '../components/google-map/google-map';
@NgModule({
  declarations: [
    MyApp,
    SN1,
    HomePage,
    InfouserPage,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    P6Page,
    P7Page,
    P8Page,
    RegisterPage,
    ShowmePage,
    CreatethemePage,
    ResultsymPage,
    ShowdrugPage,
    ShowdocPage,
    MenudoctorPage,
    ForgotpassPage,
    SearchPage,
    GamedocPage,
    InputgamePage,
    ListpatPage,
    StorydocPage,
    CreatstoryPage,
    EditstoryPage,
    QapostPage,
    ShowdatapatPage,
    P5detailPage,
    EditdrugPage,
    EditdatPage,
    StorybydocPage,
    EditgamebydocPage,
    MapPage,
    GoogleMapComponent

  ],
  imports: [
    BrowserModule,HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot()

 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SN1,
    HomePage,
    InfouserPage,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    P6Page,
    P7Page,
    P8Page,
    RegisterPage,
    ShowmePage,
    CreatethemePage,
    ResultsymPage,
    ShowdrugPage,
    ShowdocPage,
    MenudoctorPage,
    ForgotpassPage,
    SearchPage,
    GamedocPage,
    InputgamePage,
    ListpatPage,
    StorydocPage,
    CreatstoryPage,
    EditstoryPage,
    QapostPage,
    ShowdatapatPage,
    P5detailPage,
    EditdrugPage,
    EditdatPage,
    StorybydocPage,
    EditgamebydocPage,
    MapPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
