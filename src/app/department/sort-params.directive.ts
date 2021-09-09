import { ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSortParams]'
})
export class SortParamsDirective {


  @Input()
  appSortParams: Array<any> = [];

constructor (private renderer: Renderer2, private targetElem: ElementRef) {}

@HostListener("click")

sortData() {

// Create object of Sort class

const sort = new Sort();

// Get Reference of current clicked Element

const elem = this.targetElem.nativeElement;

// Get In Which Order List should be sorted by default it should be set to desc on element attribute

const order = elem.getAttribute("data-order");

// Get The Property Type specially set [data-type-date]

const type = elem.getAttribute("data-type");

// Get The Property Name from Element Attribute
const property = elem.getAttribute("data-name");

if (order=== "desc") {

this.appSortParams.sort (sort.startsort (property, order, type));
 elem.setAttribute("data-order", "asc");

}

else {

this.appSortParams.sort (sort.startsort (property, order, type));
 elem.setAttribute("data-order", "desc");

}
}
}


