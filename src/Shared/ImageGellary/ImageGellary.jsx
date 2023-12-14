import PhotoAlbum from "react-photo-album";


const ImageGellary = () => {
    const photos = [
        { src: "https://images.pexels.com/photos/19311000/pexels-photo-19311000/free-photo-of-buses-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", width:1600, height: 900 },
        { src: "https://images.pexels.com/photos/19311000/pexels-photo-19311000/free-photo-of-buses-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", width: 1600, height: 900 },
        { src: "https://images.pexels.com/photos/19311000/pexels-photo-19311000/free-photo-of-buses-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", width: 1600, height: 900 },
        { src: "https://images.pexels.com/photos/19311000/pexels-photo-19311000/free-photo-of-buses-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", width: 1600, height: 900 },
        { src: "https://images.pexels.com/photos/19311000/pexels-photo-19311000/free-photo-of-buses-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", width: 1600, height: 900 },
        
    ];
    return (
        <div>
            <PhotoAlbum 
            columns={(containerWidth) => {
                if (containerWidth < 400) return 2;
                if (containerWidth < 800) return 3;
                return 4 }}
            layout="rows" photos={photos} />
        </div>
    );
};

export default ImageGellary;