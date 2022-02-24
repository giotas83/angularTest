import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shortenPipe'
})
export class ShortenPipe implements PipeTransform {

    transform(value: string, limit: number=10) {
        if(value && value.length > limit) {
            return value.substring(0, limit) + '...';
        }
        return value;
    }

}