import PropTypes from 'prop-types'

const Card = (props) => {
    return (
        <>
        {/* bg-gray-100 p-6 rounded-lg shadow-md */}
            <div className={`${props.backgroundColor} p-6 rounded-lg shadow-md`}>
                <h2 className="text-2xl font-bold">{props.title}</h2>
                <p className="mt-2 mb-4">
                    {props.description}
                </p>
                <a
                    href={props.buttonLink}
                    className={`inline-block ${props.buttonColor} text-white rounded-lg px-4 py-2 ${props.hoverColor}`}
                >
                    {props.buttonText}
                </a>
            </div>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
}

export default Card;