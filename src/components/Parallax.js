import React from 'react';
import { Parallax } from 'react-parallax';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';

 
export const P1 = () => (
 <div>
  <Parallax bgImage={food1} strength={700}>
   <div style={{ height: 500 }}></div>
  </Parallax>
 </div>
);

export const P2 = () => (
    <div>
     <Parallax bgImage={food2} strength={700}>
      <div style={{ height: 500 }}></div>
     </Parallax>
    </div>
);

export const P3 = () => (
    <div>
     <Parallax bgImage={food3} strength={700}>
      <div style={{ height: 500 }}></div>
     </Parallax>
    </div>
);
