import { Component, Inject, OnInit } from "@angular/core";
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA} from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";


@Component({
  selector: 'guide-client-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    items:Celan[];
    registerForm: FormGroup;
    isSubmitted:boolean = false;
    user = {};
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    trips: Trip[] = [
      {name: '翻译家'},
      {name: '老司机'},
      {name: '商家'},
    ];
  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private fb:FormBuilder,
              public dialog:MatDialog
    ) {
    this.items=[{
      name:"基本信息",
      tubiao:"duihao",
      shanchu:'laji'
    },
    {
      name:"详情描述",
      tubiao:"duihao",
      shanchu:"laji"
    },{
      name:"报价",
      tubiao:"duihao",
      shanchu:"laji"
    },
  ]
    iconRegistry.addSvgIcon(
      'duihao',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/duihao.svg'));iconRegistry.addSvgIcon(
      'laji',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/laji.svg'));
  }
  ngOnInit() {
      this.registerForm = this.fb.group({
        titleName:['',[Validators.required,Validators.minLength(5)]],
        home:['',[Validators.required,Validators.minLength(2)]],
        city:['',[Validators.required,Validators.minLength(2)]],
        work:['',Validators.required],
        education:['',Validators.required],
        birthday:['',[Validators.required,Validators.pattern('(^(19)\\d{2}\\/[0-1][0-9]\\d{2}$)')]],
        sex:['',Validators.required],
        identityCard:['',Validators.required],
        dateForCar:['',Validators.required],
      })
  }
  //get保存变量
      get f(){
        return this.registerForm.controls;
      }

      deleteItem(index:number){
        this.items.splice(index,1)
      }
//提交按钮
      onSubmit(){
        this.user = this.registerForm.value;
        console.log(this.user)
      }
//增加chips
      add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our trip thips
        if ((value || '').trim()) {
          this.trips.push({name: value.trim()});
        }

        // Reset the input value
        if (input) {
          input.value = '';
        }
      }
//移除chips
      remove(trip: Trip): void {
        const index = this.trips.indexOf(trip);

        if (index >= 0) {
          this.trips.splice(index, 1);
        }
      }
      //弹框
      openDialog():void {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '250px',
          data: {titleName:this.registerForm.value.titleName}
        });

      dialogRef.afterClosed().
      subscribe(result => {
          console.log(result);
        });
      }

}
//接口类
    export interface Celan {
          name:string;
          tubiao:string;
          shanchu:string
     }
    export interface Trip {
      name:string;
     }

    export interface DialogData {
     titleName:string;
    }
