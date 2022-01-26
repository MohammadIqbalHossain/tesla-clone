import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return <Container>
      <Section 
         title = "Model S"
         description = "Order online for Touchless Delivery"
         backgroundImg = "model-s.jpg"
         leftBtnText = "Custom Order"
         rightBtnText = "Existing Inventory"
      
      />
      <Section  
           title = "Model Y"
           description = "Order online for Touchless Delivery"
           backgroundImg = "model-y.jpg"
           leftBtnText = "Custom Order"
           rightBtnText = "Existing Inventory"
      />
      <Section 
           title = "Model 3"
           description = "Order online for Touchless Delivery"
           backgroundImg = "model-3.jpg"
           leftBtnText = "Custom Order"
           rightBtnText = "Existing Inventory"
      
      />
      <Section 
         title = "Model X"
         description = "Order online for Touchless Delivery"
         backgroundImg = "model-x.jpg"
         leftBtnText = "Custom Order"
         rightBtnText = "Existing Inventory"
      
      />

      <Section 
          title = "Lowest Cost Solar Panel In America"
          description = "Moneyback-guarantee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText = "Order Now"
          rightBtnText = "Learn More"
      
      />
      <Section 
          title = "Solar for new Roofs"
          description = "Solar roofs cost less than a new roof"
          backgroundImg = "solar-roof.jpg"
          leftBtnText = "Order Now"
          rightBtnText = "Learn More"
      
      />
      <Section 
          title = "Accessories"
          description = ""
          backgroundImg = "accessories.jpg"
          leftBtnText = "Shop Now"
        
      
      />

   </Container>;
}

export default Home;

const Container = styled.div`
      height: 100vh;
       

`
