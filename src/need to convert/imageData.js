const images = require.context('../assets', true, /.jpg$/);

const imageData = [
        images('./2022.jpg'),
        images('./2013.jpg'),
        images('./2014.jpg'),
        images('./2015.jpg'),
        images('./2021.jpg'),
    ];

export default imageData;