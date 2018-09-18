import { Component, ViewChild,OnInit } from "@angular/core";
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'guide-client-root',
  templateUrl: './app.web.component.html',
  styleUrls: ['./app.web.component.scss']
})
export class AppComponent implements OnInit{
  title = 'web';
  // elem:HTMLElement;
  constructor(
    private _electronService:ElectronService){

  }
 ngOnInit(){
  // var drag = require('electron-drag');
  // var clear = drag('.title-panpel');
  //  clear()
  //  if(!drag.supported) {
  //   this.elem =<HTMLElement>document.querySelector('.title-panel');
  //   this.elem.style['-webkit-app-region'] = 'drag'
  // }
 }
 bigger(){
  if (this._electronService.isElectronApp) {
    this._electronService.ipcRenderer.send('max');

  }
 }
}
