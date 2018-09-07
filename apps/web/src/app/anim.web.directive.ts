import { Directive, ElementRef, HostListener, Renderer } from "@angular/core";

@Directive({
  selector: '[guideClientAnim]'
})
export class AnimDirective {

  constructor(private el:ElementRef,private renderer:Renderer) { }
 @HostListener('mouseover')
  onMouseOver(){
    this.mouse("visible");
    // console.log("进入")
 }
 @HostListener('mouseout')
  onMouseOut(){
    this.mouse("hidden");
    // console.log("退出")
 }
  private mouse(dis:string){
    if(dis=="visible"){
      // console.log("ceng消失")
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.ceng'),"visibility","hidden")
     this.renderer.setElementStyle(this.el.nativeElement.querySelector('.circle'),"visibility","visible")
    }
    if(dis=="hidden"){
      // console.log("ceng显示")
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.ceng'),"visibility","visible")
     this.renderer.setElementStyle(this.el.nativeElement.querySelector('.circle'),"visibility","hidden")
    }
  }

}
