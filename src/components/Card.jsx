import PropTypes from 'prop-types'

const Card = () => {
    return (
        <>
        {/* bg-gray-100 p-6 rounded-lg shadow-md */}
            
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