import { IListItem } from 'src/interfaces/listItem.interface';

export interface IBoard {
    id: string;
    items: IListItem[];
}
