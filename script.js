var pictures = [
    'gallery-tomato/tomato-red-large.jpg',
    'gallery-tomato/tomato-yellow-large.jpg',
    'gallery-tomato/tomato-strange-large.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__picture-preview');
var fullPicture = document.querySelector('.full-picture');

var addThumbnailClickeHandler = function (thumbnail, picture) {
    thumbnail.addEventListener('click', function() {
        fullPicture.src = picture;
    });
}

for (var i = 0; i<thumbnails.length; i++){
    addThumbnailClickeHandler(thumbnails[i], pictures[i]);
};
