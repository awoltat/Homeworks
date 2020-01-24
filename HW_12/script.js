async function foo() {
    let usersResult = await fetch('http://jsonplaceholder.typicode.com/users');
    let users = await usersResult.json();

    let usersAlbums = await fetch(' http://jsonplaceholder.typicode.com/albums');
    let albums = await usersAlbums.json();

    let usersPhotos = await fetch(' http://jsonplaceholder.typicode.com/photos');
    let photos = await usersPhotos.json();

    for (let i = 0; i < albums.length; i++) {
        albums[i].photos = [];
        for (let j = 0; j < photos.length; j++) {
            if (albums[i].id === photos[j].albumId) {
                albums[i].photos.push(photos[j]);
            }
        }
    }

    for (let i = 0; i < users.length; i++) {
        users[i].albums = [];
        for (let j = 0; j < albums.length; j++) {
            if (users[i].id === albums[j].userId) {
                users[i].albums.push(albums[j]);
            }
        }
    }
    console.log(users);
}
foo();
