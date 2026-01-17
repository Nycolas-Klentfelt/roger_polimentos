import { Button, Container } from '../../styles'
import * as S from './styles'

const Header = () => {
  return (
    <S.BoxHeader>
      <Container>
        <S.Logo>
          <h1>Roger Polimentos</h1>
        </S.Logo>
        <S.MenuNav>
          <li>Inicio</li>
          <li>Serviços</li>
          <li>Galeria</li>
          <li>Depoimentos</li>
          <li>Contato</li>
        </S.MenuNav>
        <Button>Solicitar Orçamento</Button>
      </Container>
    </S.BoxHeader>
  )
}

export default Header
