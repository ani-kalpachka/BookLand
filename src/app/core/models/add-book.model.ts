export class AddBookModel {
    constructor(
        public id: string,
        public title: string,
        public cover: string,        
        public author: string,
        public genre: string,
        public description: string,
        public price: string
    ) { }
}