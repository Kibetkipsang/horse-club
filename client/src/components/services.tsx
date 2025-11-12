
import "./styles/services.css"
import horseFeeding from "../assets/service-horse-feeding.png"
import horseGrooming from "../assets/service-horse-grooming.png"
import horseSantuary from "../assets/service-horse-santuary.png"
import horseTracking from "../assets/service-horse-tracking.png"
import horseTraining from "../assets/service-horse-training.png"
import veterinary from "../assets/service-vet.png"

const Services = () => {
    const cards = [
        {
            id: 1,
            icon: <img src={veterinary} alt="Veterinary Services" />,
            title: "Veterinary Services",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam labore ullam eius voluptatibus explicabo possimus vel dolores accusantium harum, maiores voluptatem, excepturi eligendi temporibus similique, nulla animi. Pariatur, incidunt?"
        },
        {
            id: 2,
            icon: <img src={horseGrooming} alt="Horse Grooming" />,
            title: "Horse Grooming",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam labore ullam eius voluptatibus explicabo possimus vel dolores accusantium harum, maiores voluptatem, excepturi eligendi temporibus similique, nulla animi. Pariatur, incidunt?"
        },
        {
            id: 3,
            icon: <img src={horseTraining} alt="Horse Training" />,
            title: "Horse Training",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam labore ullam eius voluptatibus explicabo possimus vel dolores accusantium harum, maiores voluptatem, excepturi eligendi temporibus similique, nulla animi. Pariatur, incidunt?"
        },
        {
            id: 4,
            icon: <img src={horseFeeding} alt="Horse Feeding" />,
            title: "Horse Feeding",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam labore ullam eius voluptatibus explicabo possimus vel dolores accusantium harum, maiores voluptatem, excepturi eligendi temporibus similique, nulla animi. Pariatur, incidunt?"
        },
        {
            id: 5,
            icon: <img src={horseSantuary} alt="Horse Sanctuary" />,
            title: "Sanctuary For Horses",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam labore ullam eius voluptatibus explicabo possimus vel dolores accusantium harum, maiores voluptatem, excepturi eligendi temporibus similique, nulla animi. Pariatur, incidunt?"
        },
        {
            id: 6,
            icon: <img src={horseTracking} alt="Digital Tracking" />,
            title: "Digital Tracking",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam labore ullam eius voluptatibus explicabo possimus vel dolores accusantium harum, maiores voluptatem, excepturi eligendi temporibus similique, nulla animi. Pariatur, incidunt?"
        }
    ]
 
    return(
    <>
    <section className="services-section">
        <div className="services-header-wrapper">
            <h2 className="services-header">SOME OF THE THINGS WE OFFER</h2>
            <h2 className="services-heading">Our Services</h2>
        </div>
        <div className="services-grid">
            {cards.map(({id, icon, title, description}) => (
            <div key={id} className="service-card">
                <div className="card-icon">{icon}</div>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        ))}
        </div>
    </section>
    </>
)
}



export default Services;