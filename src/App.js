import React from 'react';
import PropsTypes from 'prop-types';

// FOOD 굳이 새파일로 안만들었음
function Food({name, picture, rating}) { // name, picture, rating이라는 세개의 props를 받음
  return (
    <>
      <h2>i love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </>
  );
}

Food.propTypes = {
  name: PropsTypes.string,
  picture: PropsTypes.string,
  rating: PropsTypes.number
};

// 각자의 개성이 담긴 객체
const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5.0
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.7
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.6
  }
];

// APP
function App() {
  return (
    <>
      {/* map을 사용하여 각각으로 매핑해줌 */}
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        // 모든 react의 element는 유일해야하기에 각각 ID를 지정해주고 props로 넣어줌
      ))}
    </>
  );
}

export default App;

// npm i prop-types
// 내가 전달받은 props가 내가 원하는 props인지를 확인해주는 역할