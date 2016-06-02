import {Pipe, PipeTransform} from '@angular/core';
import 'rxjs/Rx';
import {Gist} from '../gists/gist';

@Pipe({
    name: 'sortByName',
    pure: false
})

export class SortByNamePipe {
    
    transform(value: any[], queryString: any) {
        if (value == null) {
            return null;
        }
        return value.filter((gist) => new RegExp(queryString).test(gist.kategoria))
    }
}
