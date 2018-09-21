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
  // const remote=this._electronService.remote
  constructor(
    private _electronService:ElectronService){
  }
 ngOnInit(){
  const remote = this._electronService.remote
  console.log(this._electronService)
  const Menu = remote.Menu;
  const MenuItem = remote.MenuItem;
  const menu = new Menu();
      menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1 clicked'); } }));
      menu.append(new MenuItem({ type: 'separator' }));
      menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));

      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        menu.popup({window:remote.getCurrentWindow()});
    }, false);
 }
 bigger(){
  if (this._electronService.isElectronApp) {
    this._electronService.ipcRenderer.send('max');
  }
 }
 closedSon(){
  if (this._electronService.isElectronApp) {
    this._electronService.ipcRenderer.send('clS');
  }
 }
}
