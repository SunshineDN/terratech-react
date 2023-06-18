/* eslint-disable react/prop-types */
import { NewsContainer, NewsContent, NewsDescription, NewsImage, NewsItem, NewsTitle } from './styles'

const NewsComponent = ({ news }) => {

  return (
    <NewsContainer>
      {news.map((item, index) => (
        <NewsItem key={index}>
          <NewsImage src={item.image} />
          <NewsContent>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsDescription>{item.description}</NewsDescription>
          </NewsContent>
        </NewsItem>))}
    </NewsContainer>
  )
}

export default NewsComponent