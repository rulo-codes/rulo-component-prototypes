const options = {
    key: '',
    verbose: true,
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
}

windyInit(options, windyAPI => {
    const { map } = windyAPI;

    L.popup()
        .setLatlng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});