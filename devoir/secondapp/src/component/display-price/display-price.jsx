import PropTypes from 'prop-types';

const DisplayPrice = (props) => {
    const {value} = props;

    return(
        <span>{value}</span>
    );
};

DisplayPrice.propTypes = {
    value: PropTypes.number.isRequired
}

export default DisplayPrice;