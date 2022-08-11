import { IImage } from './image.interface';

export interface IStateImage {
    images: IImage[];
    status: string | null;
    error: string | null;
}
