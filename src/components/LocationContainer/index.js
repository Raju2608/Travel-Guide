import {
  LocationCardContainer,
  Heading,
  Paragraph,
  HeadingDescriptionContainer,
} from './styledComponents'

import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {name, description, imageUrl} = locationData

  return (
    <li className="list-location">
      <LocationCardContainer>
        <img src={imageUrl} className="image" alt={name} />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </li>
  )
}

export default LocationContainer
