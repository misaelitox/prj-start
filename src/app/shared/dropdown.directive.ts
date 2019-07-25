import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';
@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    
    constructor(private elmRef:ElementRef){}

    @HostListener('document:click',['$event']) toggleOpen(event:Event) {
        this.isOpen = this.elmRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}