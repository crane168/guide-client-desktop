import { Component, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA} from "@angular/material";
import { MatBottomSheet} from '@angular/material';
import { ModifyComponent} from '../dialog/modify/modify.web.component'
@Component({
  selector: 'guide-client-table',
  templateUrl: './table.web.component.html',
  styleUrls: ['./table.web.component.scss']
})
export class TableComponent implements OnInit {
 @Input() user:any;

  constructor( public bootomSheet:MatBottomSheet,) {

    console.log(this.user)
   }

  ngOnInit() {
    console.log(this.user);
  }
  // openDialog():void {
  //   const dialogRef = this.bootomSheet.open(ModifyComponent, {
  //     width:window.innerWidth+'px',
  //     // panelClass:'my-full-screen-dialog',
  //     data: {user:this.user}

  //   });

  // dialogRef.afterClosed().
  // subscribe(result => {
  //     console.log(result);
  //     this.user= result.task
  //   });
  // }
  openBottomSheet(): void {
    const bottomSheetRef = this.bootomSheet.open(ModifyComponent,{
      data: {user:this.user}
    });
    bottomSheetRef.afterDismissed().
    subscribe(result=>{
      console.log(result);
      this.user = result.task
    })
  }
}

