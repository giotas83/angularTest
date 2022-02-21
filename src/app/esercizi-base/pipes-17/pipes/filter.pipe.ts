import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterPipe',
    pure: false // adesso vede le modifiche nell array, se ad esempio viene aggiunto un elem
})
export class FilterPipe implements PipeTransform{

    transform(value: any[], filterString: string, propName: string): any {
        if(value && !value.length || filterString === '') {
            return value;
        }
        const resultArray = [];
        for(const item of value) {
            if(item[propName] === filterString) {
                resultArray.push(item);
            }
            return resultArray;
        }
    }
}