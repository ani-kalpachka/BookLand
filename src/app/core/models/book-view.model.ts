export class BookViewModel {
    constructor(
        public _id?: number,
        public title?: string,
        public cover?: string,        
        public bookAuthor?: string,
        public genre?: string,
        public description?: string,
        public price?: number
    ) { } 
}