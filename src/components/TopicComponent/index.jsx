/* eslint-disable react/prop-types */
import { Top, TopicContainer, TopicContent, TopicIcon, TopicItem, TopicItemCount, TopicItemTitle, TopicTitle } from './styles'

const TopicComponent = ({ list }) => {
  return (
    <TopicContainer>
      <Top>
        <TopicIcon />
        <TopicTitle>Mais lidas</TopicTitle>
      </Top>
      <TopicContent>
        {list.map((item, index) => (
          <TopicItem key={index}>
            <TopicItemCount $first={item.rank === 1}>{item.rank}</TopicItemCount>
            <TopicItemTitle $first={item.rank === 1}>{item.title}</TopicItemTitle>
          </TopicItem>))}
      </TopicContent>
    </TopicContainer>
  )
}

export default TopicComponent