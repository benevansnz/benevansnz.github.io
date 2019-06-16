import PropTypes from "prop-types"
import React from "react"

const Card = ({ 
  linkDestination, 
  cardTitle, 
  cardDescription, 
  ctaText 
}) => (
<card class="card">
  <a 
    class="card__link" 
    href={ linkDestination }
    style={{
      color: `#003e6b`,
      textDecoration: `none`,
    }}
  >
    <h3 
      class="card__title" 
      style={{ display: 'inline-block'}}
    >{ cardTitle }</h3>
  </a>
  <p class="card__description">{ cardDescription }</p>
  <a href={ linkDestination } target="_blank" rel="noopener noreferrer">
    <button class="card__cta">
      { ctaText }
    </button>
  </a>
</card>
)

Card.propTypes = {
  linkDestination: PropTypes.string,
  cardDescription: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string
}

Card.defaultProps = {
  linkDestination: "/",
  cardDescription: "",
  ctaText: "read more"
}

export default Card
