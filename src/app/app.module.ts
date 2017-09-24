import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';
import { Dialogs } from '@ionic-native/dialogs';

export const firebaseConfig = {
  apiKey: "AIzaSyCT0QaETVQJLHZbju8JnSdVnzMQ3ZlA-9E",
  authDomain: "test-c8901.firebaseapp.com",
  databaseURL: "https://test-c8901.firebaseio.com",
  projectId: "test-c8901",
  storageBucket: "",
  messagingSenderId: "902083682403"
}

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
