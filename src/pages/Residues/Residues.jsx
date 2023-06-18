import { AddButton, AddIcon, Filter, FilterContainer, FilterItem, FilterItemNotif, FilterItemText } from '../../components/ResiduesFilterComponent/styles';
import ResiduesItemsComponent from '../../components/ResiduesItemsComponent';
import { Layout } from '../../layout';
import { Container } from './styles';
import Bottle from '../../assets/icons/Bottle.svg'
import { useState } from 'react';

const Residues = () => {
  const [residues] = useState([
    {
      residue: 'Garrafa PET',
      description: 'As garrafas PET são recipientes versáteis e amplamente utilizados, feitos de plástico resistente, ideais para armazenar líquidos como água, refrigerantes e produtos de limpeza.',
      time: '2 dias restantes',
      situation: 'Aprovado',
      icon: Bottle,
      quantity: 2,
      points: 2
    },
    {
      residue: 'Garrafa PET',
      description: 'As garrafas PET são recipientes versáteis e amplamente utilizados, feitos de plástico resistente, ideais para armazenar líquidos como água, refrigerantes e produtos de limpeza.',
      time: '5 dias restantes',
      situation: 'Em análise',
      icon: Bottle,
      quantity: 4,
      points: 3
    },
    {
      residue: 'Garrafa PET',
      description: 'As garrafas PET são recipientes versáteis e amplamente utilizados, feitos de plástico resistente, ideais para armazenar líquidos como água, refrigerantes e produtos de limpeza.',
      time: '7 dias restantes',
      situation: 'Não aprovado',
      icon: Bottle,
      quantity: 10,
      points: 6
    },
    {
      residue: 'Garrafa PET',
      description: 'As garrafas PET são recipientes versáteis e amplamente utilizados, feitos de plástico resistente, ideais para armazenar líquidos como água, refrigerantes e produtos de limpeza.',
      time: '2 dias restantes',
      situation: 'Aprovado',
      icon: Bottle,
      quantity: 2,
      points: 2
    },
    {
      residue: 'Garrafa PET',
      description: 'As garrafas PET são recipientes versáteis e amplamente utilizados, feitos de plástico resistente, ideais para armazenar líquidos como água, refrigerantes e produtos de limpeza.',
      time: '5 dias restantes',
      situation: 'Em análise',
      icon: Bottle,
      quantity: 4,
      points: 3
    },
    {
      residue: 'Garrafa PET',
      description: 'As garrafas PET são recipientes versáteis e amplamente utilizados, feitos de plástico resistente, ideais para armazenar líquidos como água, refrigerantes e produtos de limpeza.',
      time: '7 dias restantes',
      situation: 'Não aprovado',
      icon: Bottle,
      quantity: 10,
      points: 6
    },
  ]);

  const [listFilter, setListFilter] = useState(residues);

  const handleCountResidue = (list, filter) => {
    if (filter === 'Todos') {
      return list.length;
    }
    let count = 0;
    list.forEach((item) => {
      if (item.situation === filter) {
        count++;
      }
    });
    return count;
  }

  const handleFilter = (list, filter) => {
    setListFilter(list.filter((item) => item.situation === filter));
  }

  return (
    <Layout>
      <Container>
        <FilterContainer>
          <Filter>
            <FilterItem onClick={() => setListFilter(residues)}>
              <FilterItemText>Todos</FilterItemText>
              <FilterItemNotif>{handleCountResidue(residues, 'Todos')}</FilterItemNotif>
            </FilterItem>

            <FilterItem onClick={() => handleFilter(residues, 'Em análise')}>
              <FilterItemText>Em análise</FilterItemText>
              <FilterItemNotif>{handleCountResidue(residues, 'Em análise')}</FilterItemNotif>
            </FilterItem>

            <FilterItem onClick={() => handleFilter(residues, 'Aprovado')}>
              <FilterItemText>Aprovados</FilterItemText>
              <FilterItemNotif>{handleCountResidue(residues, 'Aprovado')}</FilterItemNotif>
            </FilterItem>

            <FilterItem onClick={() => handleFilter(residues, 'Não aprovado')}>
              <FilterItemText>Não aprovados</FilterItemText>
              <FilterItemNotif>{handleCountResidue(residues, 'Não aprovado')}</FilterItemNotif>
            </FilterItem>
          </Filter>
          <AddButton>
            <AddIcon />
            Adicionar resíduo
          </AddButton>
        </FilterContainer>
        <ResiduesItemsComponent residues={listFilter} />
      </Container>
    </Layout>
  );
};

export default Residues;