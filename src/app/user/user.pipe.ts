import {Pipe, PipeTransform} from '@angular/core'
import { Users } from '../users';

@Pipe({
name:'userFilter'
})

export class UserFilter implements PipeTransform
{
    transform(value:Users[],filterBy:string):Users[]{
        filterBy=filterBy?filterBy.toLowerCase():null
        return filterBy?value.filter((user:Users)=>user.name.toLowerCase().indexOf(filterBy)!== -1):value
    }
    
}