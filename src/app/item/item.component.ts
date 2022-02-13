import {Component, Input} from "@angular/core"
import { Items } from "../item.model"
import { ItemsService } from "../items.service"

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})

export class ItemComponent{
    @Input() item: Items
    @Input() itemIndex: number

    constructor(private itemService:ItemsService){

    }

    onDeleteItem(){
        this.itemService.deleteItem(this.itemIndex)
    }

    onItemDone(){
        this.itemService.finishItem(this.itemIndex)

    }

}