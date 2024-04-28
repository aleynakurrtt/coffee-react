import styles from "./card.module.scss"

const Card = ({ icon, title, description, image }) => {
    return (
        <div className="col-lg-6 col-xxl-4 mt-5 mb-5">
            <div className="card  border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div className={`feature bg-gradient text-white rounded-3 mb-4 mt-n4  ${styles.card_icon_wrap}`} ><i class="bi bi-cup-hot"></i></div>
                    <h2 className="titlee fs-4 fw-bold">{title}</h2>
                    <p className="descrip mb-0">{description}</p>
                    <img src={image} className="pic-1" />
                </div>
            </div>
        </div>
    )
}

export default Card