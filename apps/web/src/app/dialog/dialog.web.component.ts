import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef,MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: 'guide-client-dialog',
  templateUrl: './dialog.web.component.html',
  styleUrls: ['./dialog.web.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public bottomSheetRef: MatBottomSheetRef<DialogComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: DialogData,
    private router:Router
  ) { }

  ngOnInit() {
    // this.dialogRef.updatePosition({ right: '5px', left: '5px',bottom:'0px' })
  }
  onNoClick(): void {
    this.bottomSheetRef.dismiss('The dialog was closed');
  }
  toHome(){
    this.router.navigate(['/'])
  }


}
export interface DialogData{
  titleName:string;
}
