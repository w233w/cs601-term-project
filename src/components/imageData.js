const images = require.context('../assets', true, /.jpg$/);

const imageData = [
    {src: images('./2022.jpg'), msg: "2022, I'm graduated!"},
    {src: images('./2013.jpg'), msg: "2014, In Beijing, China"},
    {src: images('./2014.jpg'), msg: "2015, Trevel to Europe"},
    {src: images('./2015.jpg'), msg: "2017, My old social media photo."},
    {src: images('./2021.jpg'), msg: "2021, My ID photo on BU ID card."},
];

export default imageData;
