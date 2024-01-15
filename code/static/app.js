document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    const playlistInfo = document.getElementById('playlist-info');
    const playlistList = document.getElementById('playlist-list');

    loginButton.addEventListener('click', function () {
        // Add logic for Spotify login, handle authentication, and then show playlist info
        // You may use fetch() or other methods to communicate with your backend
        // Once authenticated, toggle the 'hidden' class on playlistInfo and fetch playlist data
        fetch('/playlists')
            .then(response => response.json())
            .then(data => {
                console.log('Playlist Data:', data)
                displayPlaylists(data);
                playlistInfo.classList.remove('hidden');
            });
    });

    function displayPlaylists(playlists) {
        // Add logic to display playlists on the page
        const playlistItems = playlists.items || [];

        playlistList.innerHTML = ''; // Clear previous playlist items

        playlistItems.forEach(playlist => {
            const listItem = document.createElement('li');
            listItem.textContent = playlist.name;
            playlistList.appendChild(listItem);
        });
    }
});
