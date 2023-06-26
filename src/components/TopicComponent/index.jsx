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
          <TopicItem $first={item.rank === 1} key={index}>
            <TopicItemCount>{item.rank}</TopicItemCount>
            <TopicItemTitle>{item.title}</TopicItemTitle>
          </TopicItem>))}
      </TopicContent>
    </TopicContainer>
  )
}

export default TopicComponent