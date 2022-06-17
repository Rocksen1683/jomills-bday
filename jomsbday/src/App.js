import React from 'react';
import Form from './form.js';
import { Background, CenteredForm } from './styles/stylez.js';
import './styles/styles.css'
import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop autoplay={2000}>
      <Carousel.Item>
        <img width="69%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="69%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="69%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0014.jpg")}
        />
      </Carousel.Item>
    </Carousel>
  );
};




function App() {
  return (
    <Background>
      <div className="App">
        <CenteredForm>
          <header className="App-header">
            <h1>Jomirisu's 19th Bday</h1>
          </header>
          <Gallery />
          <Form></Form>
        </CenteredForm>
      </div>
    </Background>
  );
}


export default App;
