import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => { // async는 이 함수가 비동기라고 하는것
    // API에서 데이타가져오기
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // await는 뭘 기다리기 원할지
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? 'Loading...' : movies.map(movie => (
      <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
    ))}</div>;
  }
}

export default App;

// axios 설치
// npm install axios

// axios란?
// fetch의 업그레이드 기능이 axios
// 바닐라 자바스크립트로 구현된 비동기 통신 라이브러리