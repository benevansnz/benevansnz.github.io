import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import Media from 'react-media'

const Card = ({ 
  linkDestination, 
  cardTitle, 
  cardDescription, 
  desktopFlex 
}) => (
  <Media query={{ minWidth: 768 }}>
    { matches => matches ? (
      <card style={{
        flex: desktopFlex,
        border: '1px solid black'
      }}>
        <Link to={ linkDestination }>
          <Image />
        </Link>
        <Link 
          to={ linkDestination }
          style={{
            color: `#003e6b`,
            textDecoration: `none`,
          }}
        >
          <h3 style={{ display: 'inline-block'}}>{ cardTitle }</h3>
        </Link>
        <p>{ cardDescription }</p>
      </card>
    ) : (
      <card>
        <Link to={ linkDestination }>
          <Image />
        </Link>
        <Link 
          to={ linkDestination }
          style={{
            color: `#003e6b`,
            textDecoration: `none`,
          }}
        >
          <h3 style={{ display: 'inline-block'}}>{ cardTitle }</h3>
        </Link>
        <p>{ cardDescription }</p>
      </card>
    )}
  </Media>
)

Card.propTypes = {
  linkDestination: PropTypes.string,
  cardDescription: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  desktopFlex: PropTypes.string
}

Card.defaultProps = {
  linkDestination: "/",
  cardDescription: "Lorem ipsum dolor blah blah blah blah. Lorem ipsum dolor blah blah blah blah.",
  desktopFlex: '0 0 100%'
}

export default Card
