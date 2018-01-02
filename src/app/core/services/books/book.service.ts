import { Injectable } from '@angular/core';
import { BookViewModel } from '../../models/book-view.model';

@Injectable()
export class BooksService {
    books : BookViewModel[] = [
        new BookViewModel(1, 'The Dead Zone', 'https://images.gr-assets.com/books/1347770192l/2395869.jpg', 'Stephen King', 'Mystery, Thriller', 'Johnny Smith, a young teacher in a small provincial town, is the victim of a car accident, shortly after having accompanied his girlfriend, Sarah. He wakes up after five years of coma. Sarah is now married. He realizes that past, present and future are confused in his mind and he gets the accursed power—the power to see the future and the terrible fate awaiting mankind in The Dead Zone. This is how he manages to save the child of his nurse from a fire and reveals to his doctor that his mother, whom he thought was deported, is in fact still alive.', 13),
        new BookViewModel(2, 'The Lord of the Rings', 'https://images.gr-assets.com/books/1411114164l/33.jpg', 'J.R.R. Tolkien', 'Epic high fantasy', 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.', 21.95),
        new BookViewModel(3, 'Elon Musk: Inventing the Future','http://www.biographicalinquiries2.com/wp-content/uploads/2015/04/ELON-COVER-BOOK-LARGE.jpg',  'Ashlee Vance', 'Biography', 'Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius’s life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.', 10.50),
        new BookViewModel(4, 'The Picture of Dorian Gray', 'https://usercontent2.hubstatic.com/13270253.jpg', 'Oscar Wilde', 'Philosophical fiction', 'Dorian Gray is the subject of a full-length portrait in oil by Basil Hallward, an artist who is impressed and infatuated by Dorian\'s beauty; he believes that Dorian\'s beauty is responsible for the new mode in his art as a painter. Through Basil, Dorian meets Lord Henry Wotton, and he soon is enthralled by the aristocrat\'s hedonistic worldview: that beauty and sensual fulfilment are the only things worth pursuing in life.Newly understanding that his beauty will fade, Dorian expresses the desire to sell his soul, to ensure that the picture, rather than he, will age and fade. The wish is granted, and Dorian pursues a libertine life of varied and amoral experiences, while staying young and beautiful; all the while his portrait ages and records every sin.', 9.99),
        new BookViewModel(5, 'Brief History of Time', 'https://images-na.ssl-images-amazon.com/images/I/617m43n-HWL._SX331_BO1,204,203,200_.jpg', 'Stephen Hawking', 'Popular science', 'In A Brief History of Time, Stephen Hawking attempts to explain a range of subjects in cosmology, including the Big Bang, black holes and light cones, to the nonspecialist reader. His main goal is to give an overview of the subject, but he also attempts to explain some complex mathematics. In the 1996 edition of the book and subsequent editions, Hawking discusses the possibility of time travel and wormholes and explores the possibility of having a universe without a quantum singularity at the beginning of time.', 10),
        new BookViewModel(6, 'Me Before You', 'https://images-na.ssl-images-amazon.com/images/I/51z4z79P27L._SX277_BO1,204,203,200_.jpg', 'Jojo Moyes', 'Romance', 'Louisa Clark is an ordinary young woman living an exceedingly ordinary life—steady boyfriend, close family—who has never been farther afield than their tiny village. She takes a badly needed job working for ex-Master of the Universe Will Traynor, who is wheelchair-bound after an accident. Will has always lived a huge life—big deals, extreme sports, worldwide travel—and now he’s pretty sure he cannot live the way he is. A love story for this generation, Me Before You brings to life two people who couldn’t have less in common—a heartbreakingly romantic novel that asks, What do you do when making the person you love happy also means breaking your own heart?', 5.99),
        new BookViewModel(7, 'Hitchhiker\s Guide to Galaxy', 'https://images.gr-assets.com/books/1388282444l/386162.jpg', 'Douglas Adams', 'Comic science fiction', 'Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker’s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together, this dynamic pair began a journey through space aided by a galaxyful of fellow travelers.', 12.50),
        new BookViewModel(8, 'East of Eden', 'https://images-na.ssl-images-amazon.com/images/I/81eMMNVkt7L.jpg', 'John Steinbeck', 'Romance novel, Tragedy, Mythology', 'Set in the rich farmland of California’s Salinas Valley, this sprawling and often brutal novel follows the intertwined destinies of two families—the Trasks and the Hamiltons—whose generations helplessly reenact the fall of Adam and Eve and the poisonous rivalry of Cain and Abel. Here Steinbeck created some of his most memorable characters and explored his most enduring themes: the mystery of identity; the inexplicability of love; and the murderous consequences of love’s absence.', 10),
        new BookViewModel(9, '1984', 'George Orwell', 'http://assets.nydailynews.com/polopoly_fs/1.2662811.1465220292!/img/httpImage/image.jpg_gen/derivatives/article_750/lvorwell7n-1-web.jpg', 'Utopian and dystopian fiction, Political fiction', 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmare vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life - the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.', 22),
        new BookViewModel(10, 'Fourty Rules of Love', 'https://images-na.ssl-images-amazon.com/images/I/51SR9ESu4hL._SX323_BO1,204,203,200_.jpg', 'Elif Shafak', 'Historical Fiction', 'Ella Rubenstein is forty years old and unhappily married when she takes a job as a reader for a literary agent. Her first assignment is to read and report on Sweet Blasphemy, a novel written by a man named Aziz Zahara. Ella is mesmerized by his tale of Shams\'s search for Rumi and the dervish\'s role in transforming the successful but unhappy cleric into a committed mystic, passionate poet, and advocate of love. She is also taken with Shams\'s lessons, or rules, that offer insight into an ancient philosophy based on the unity of all people and religions, and the presence of love in each and every one of us. As she reads on, she realizes that Rumi\'s story mir­rors her own and that Zahara—like Shams—has come to set her free.', 8.95),
        
    ];

    getAllBooks() : BookViewModel[] {
        return this.books;
    }

    getBookById(bookId : number) : BookViewModel {
        return this.books.find(b => b.id === bookId);
    }
} 