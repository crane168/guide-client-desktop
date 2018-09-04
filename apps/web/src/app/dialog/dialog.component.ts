import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: 'guide-client-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close('The dialog was closed');
  }
  toHome(){
    this.router.navigate(['/'])
  }


}
export interface DialogData{
  titleName:string;
}
