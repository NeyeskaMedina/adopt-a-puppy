import { useState } from 'react';
import { Content } from "./Content";

export const MyCards = () => {
    const arrProps = [
        {   src: "https://pixabay.com/get/g8b0677db88a5088813309f898c3e9dd18dd912809701eb311e5f85e58a044d236d6eff9b390e9c080ef4d35a1c4a41fd_640.jpg", 
            name: "Choco", 
            description: "Labrador, inteligente, excelente compañia para la familia y completamente sano", 
            breed: "Labrador", 
            color: "primary"
        },
        {   src: "https://pixabay.com/get/g516bc8eca2364153eda571eb983ba6d303372e0b271f78e5f50b3e97085e208150a274d5e1d504717a957cabb2d784ee_640.jpg", 
            name: "Boyka", 
            description: "Hermoso pitbull fuerte ideal para cuidar a la familia de buenos cuidados", 
            breed: "Pitbull", 
            color: "success"
        },
        {   src: "https://pixabay.com/get/g9eb7db04fad83faf594c9707883fa50e3738d1941e099bded8b91cbf7ba71ba98c315b23a9693c1209b68e242972bf9c_640.jpg", 
            name: "Bimba", 
            description: "Pequeña bulldog frances, cariñosa, juguetona perfecta para compañia de los pequeños de la casa", 
            breed: "Bulldog Frances", 
            color: "secondary"
        },
        {
            src: "https://pixabay.com/get/g642a813f46115a105ff6062267b4092f973177845fa8eeef531151866d7e1dcafa6690cdc736f0564bf9bb943c4063c3_640.jpg", 
            name: "Nieve", 
            description: "Bello Husky inteligente, perfecto para la zona de invierno del pais", 
            breed: "Husky Siberiano", 
            color: "danger"
        },
        {   src: "https://pixabay.com/get/g4cf2103de50d085ee69781a5628ed352a5cae4ddd9c57320488bc0ef583b72fdaa2e64c9146daf23a8ff5f176dea0389_640.jpg", 
            name: "Layka", 
            description: "Hermosa German Spitz color marron perfecta para compartir con la familia y elegancia es la mejor forma para describirla.", 
            breed: "German Spitz", 
            color: "warning"
        },
        {
            src: "https://pixabay.com/get/ged51c2a8c96fd5961f78bf97e169ef9f6a20a9d5ce09315e2f9d841fa04a77bf40c2fc7252919edbf0056e87da345d1f_640.jpg", 
            name: "Majestuoso", 
            description: "Pastor Aleman espectacular inteligente y el mejor amigo para cuidarte.", 
            breed: "Pastor Aleman", 
            color: "success"
        }

    ]
    const [arreglo, setArreglo] = useState(arrProps);

    return (
        <div className='box-card'>
            {arreglo.map(items => <Content src={items.src} name={items.name} description={items.description} textBreed={items.breed} colorBgd={items.color}></Content>)}
        </div>
    )
}

export default MyCards;