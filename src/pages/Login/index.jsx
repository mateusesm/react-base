import { useDispatch } from 'react-redux';

import * as exampleActions from '../../redux/store/modules/example/actions';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export const Login = () => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();

    dispatch(exampleActions.clickButtonRequest());
  };

  return (
    <Container>
      <Title>
        Login
        <small>Oi</small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Paragrafo>
      <button onClick={handleClick} type="button">
        Enviar
      </button>
    </Container>
  );
};
