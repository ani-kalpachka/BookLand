export class AddBookModel {
    constructor(
        public id?: number,
        public title?: string,
        public cover?: string,        
        public author?: string,
        public genre?: string,
        public description?: string,
        public price?: number
    ) { }
}