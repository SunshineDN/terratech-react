/* eslint-disable react/prop-types */
import { ResiduesItems, ResiduesItemsContainer, ResiduesItemsLeft, ResiduesItemsLeftIcon, ResiduesItemsLeftText, ResiduesItemsLeftTextDescription, ResiduesItemsLeftTextTitle, ResiduesItemsRight, ResiduesItemsRightBottom, ResiduesItemsRightBottomItem, ResiduesItemsRightBottomItemDescription, ResiduesItemsRightBottomItemTitle, ResiduesItemsRightBottomSeparator, ResiduesItemsRightTop, ResiduesItemsRightTopDots, ResiduesItemsRightTopSituation, ResiduesItemsRightTopSituationDot, ResiduesItemsRightTopSituationText, ResiduesItemsRightTopTime, ResiduesItemsRightTopTimeIcon, ResiduesItemsRightTopTimeText } from './styles'

const ResiduesItemsComponent = ({ residues }) => {
  return (
    <ResiduesItemsContainer>

      {residues.map((residue, index) => (
        <ResiduesItems key={index}>
          <ResiduesItemsLeft>
            <ResiduesItemsLeftIcon icon={residue.icon} />
            <ResiduesItemsLeftText>
              <ResiduesItemsLeftTextTitle>{residue.residue}</ResiduesItemsLeftTextTitle>
              <ResiduesItemsLeftTextDescription>{residue.description}</ResiduesItemsLeftTextDescription>
            </ResiduesItemsLeftText>
          </ResiduesItemsLeft>
          <ResiduesItemsRight>
            
            <ResiduesItemsRightTop>
              <ResiduesItemsRightTopTime>
                <ResiduesItemsRightTopTimeIcon />
                <ResiduesItemsRightTopTimeText>{residue.time}</ResiduesItemsRightTopTimeText>
              </ResiduesItemsRightTopTime>
              
              <ResiduesItemsRightTopSituation $situation={residue.situation}>
                <ResiduesItemsRightTopSituationDot />
                <ResiduesItemsRightTopSituationText>{residue.situation}</ResiduesItemsRightTopSituationText>
              </ResiduesItemsRightTopSituation>

              <ResiduesItemsRightTopDots />
            </ResiduesItemsRightTop>

            <ResiduesItemsRightBottom>
              <ResiduesItemsRightBottomItem>
                <ResiduesItemsRightBottomItemTitle>Quantidade</ResiduesItemsRightBottomItemTitle>
                <ResiduesItemsRightBottomItemDescription>{residue.quantity}</ResiduesItemsRightBottomItemDescription>
              </ResiduesItemsRightBottomItem>

              <ResiduesItemsRightBottomSeparator />

              <ResiduesItemsRightBottomItem>
                <ResiduesItemsRightBottomItemTitle>Pontos</ResiduesItemsRightBottomItemTitle>
                <ResiduesItemsRightBottomItemDescription>+{residue.points}</ResiduesItemsRightBottomItemDescription>
              </ResiduesItemsRightBottomItem>
            </ResiduesItemsRightBottom>

          </ResiduesItemsRight>
        </ResiduesItems>
      ))}
      {/* <ResiduesItems>
        <ResiduesItemsLeft>
          <ResiduesItemsLeftIcon icon={Bottle} />
          <ResiduesItemsLeftText>
            <ResiduesItemsLeftTextTitle>Garrafa PET</ResiduesItemsLeftTextTitle>
            <ResiduesItemsLeftTextDescription>As garrafas PET são recipientes versáteis e amplamente utilizados, feitos de plástico resistente, ideais para armazenar líquidos como água, refrigerantes e produtos de limpeza.</ResiduesItemsLeftTextDescription>
          </ResiduesItemsLeftText>
        </ResiduesItemsLeft>
        <ResiduesItemsRight>

          <ResiduesItemsRightTop>
            <ResiduesItemsRightTopTime>
              <ResiduesItemsRightTopTimeIcon />
              <ResiduesItemsRightTopTimeText>2 dias restantes</ResiduesItemsRightTopTimeText>
            </ResiduesItemsRightTopTime>

            <ResiduesItemsRightTopSituation>
              <ResiduesItemsRightTopSituationDot />
              <ResiduesItemsRightTopSituationText>Aprovado</ResiduesItemsRightTopSituationText>
            </ResiduesItemsRightTopSituation>

            <ResiduesItemsRightTopDots />
          </ResiduesItemsRightTop>


          <ResiduesItemsRightBottom>
            <ResiduesItemsRightBottomItem>
              <ResiduesItemsRightBottomItemTitle>Quantidade</ResiduesItemsRightBottomItemTitle>
              <ResiduesItemsRightBottomItemDescription>5</ResiduesItemsRightBottomItemDescription>
            </ResiduesItemsRightBottomItem>

            <ResiduesItemsRightBottomSeparator />

            <ResiduesItemsRightBottomItem>
              <ResiduesItemsRightBottomItemTitle>Pontos</ResiduesItemsRightBottomItemTitle>
              <ResiduesItemsRightBottomItemDescription>+10</ResiduesItemsRightBottomItemDescription>
            </ResiduesItemsRightBottomItem>
          </ResiduesItemsRightBottom>

        </ResiduesItemsRight>
      </ResiduesItems> */}
    </ResiduesItemsContainer>
  )
}

export default ResiduesItemsComponent