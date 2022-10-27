
    class Bookshelf {
        constructor() {
            this.favoriteBooks = [];
        }
        addFavouriteBook(bookname) {
            if(!bookname.includes("Great")) {
                this.favoriteBooks.push(bookname);
            }
        }
        printFavoriteBooks() {
            console.log(`Favorite Books: ${this.favoriteBooks.length}`);
            for(let bookname of this.favoriteBooks) {
                console.log(bookname);
            }
        }
        
    }

    function loadBooks(theBookShelf) {
        fakeAjax(BOOK_API, function onBooks(bookNames) {
            for( let bookName of bookNames) {
                theBookShelf.addFavouriteBook(bookName);
            }
            theBookShelf.printFavoriteBooks();
        });
    }

    var BOOK_API = "https://some.url/api";
    var myBooks = new Bookshelf();
    loadBooks(myBooks);
    function fakeAjax(url,cb) {
        setTimeout(function fakeLoadingDelay(){
            cb([
                "A Song of Ice and Fire",
                "The Great Gatsby",
                "Crime & Punishment",
                "Great Expectations",
                "You Don't Know JS"
            ]);
        }, 500);
    }

    _.each 

    const _ = {};
    _.each = function(list, callback) {
        if(Array.isArray(list)) {
            for(let i=0; i<list.length; i++) {
                callback(list[i], i, list);
            }
        } else {
            //loop through the object
            // call the callback function with a list item
            for(let key in list){
                callback(list[key], key, list)
            }
        }
    }
    _.each(['sally', 'georgie', 'john'], function(name, i, list) {
        if(list[i+1]){
            console.log(name, 'is younger than', list[i+1])
        } else {
            console.log(name, 'is the oldest')
        }
    })

    function CreateSuspectObjects(name) {
        return {
            name: name,
            color: name.split(' ')[1],
            speak() {console.log(`My name is ${this.name}`);}
        };
    };
    var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];
    var suspectsList = _.map(suspects, function (name) {
        return CreateSuspectObjects(name);
    }
    _.each(suspects, function(suspect) {
        suspect.speak()
    });

    .map()
    
    const weapons = ['candlestick', 'lead pipe', 'revolver'];
    const makeBroken = function(item) {
        return `broken ${item}`;
    };
    _.map(weapons, makeBroken)

    filter()
 
    const _ = [];

    _.filter = function(arr, cb) {
        //create a new array
        const storage = [];
        //loop through the array
        _.each(arr, function(item, i, list){
            if(cb(item, i, arr)) storage.push(item);
        });
        // return arr
        return storage;
    }

 array like object

 const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the storage place');
    return arr.join(' ');
 };

 constructArr('arr', 'it', 'in');

reduce

const reduce = function(list, cb, initial) {
    let memo = initial;
    for(let i=0; i<list.length; i++) {
        if(i===0 && memo === undefined){
            memo = list[0];
        }else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
};

const res = reduce([2,3,4,5], (v, sum) => v+sum); //14

console.log(res);

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

