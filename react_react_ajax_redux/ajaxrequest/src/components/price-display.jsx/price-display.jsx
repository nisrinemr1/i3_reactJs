import PropTypes from 'prop-types';

const PriceDisplay = ({ value }) =>{

    const options =  { 
        style: 'currency', currency: 'EUR' 
    }
    const price = new Intl.NumberFormat('fr-BE', options).format(value)

    return(
        <span>{price}</span>
    );
};

PriceDisplay.propTypes = {
    value: PropTypes.number.isRequired
};

export default PriceDisplay;