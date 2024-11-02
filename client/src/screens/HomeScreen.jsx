import React, { useEffect } from 'react'
// import AllPizza from '../pizza-data';
import {Container, Row, Col} from 'react-bootstrap'; 
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzaReducer } from '../reducers/pizzaReducer';
import { getAllPizzas } from '../actions/pizzaAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { pizzas } = useSelector((state) => state.getAllPizzaReducer)

  useEffect(() => {
    dispatch(getAllPizzas());
  },[dispatch])

  return (
    <>
    <Container>
      <Row>
        {pizzas.map(pizza =>(
          <Col md={4}>
            <Pizza pizza={pizza}/>
          </Col>

        ))}

      </Row>
    </Container>
      
    </>
  );
};

export default HomeScreen;
