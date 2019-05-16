import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  //Render: will->render->did

  //Update: componentWillReceiveProps() -> shouldComponentUpdate() == update ? pre.props != recent.prop -> componentWillUpdate() -> render -> componentDidUpdate
  
  state = {}

  componentDidMount(){
    console.log("Did mount");
    setTimeout(() => {
      
    }, 5000)
    this._getMovies();
  }

  _renderMovies = function(){
    const movies = this.state.movies.map((movie) => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies =  async () => {
    const movies =  await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => {
      console.log(json.data.movies)
      return (json.data.movies);
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log("did render");
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : console.log('loading') }
      </div>
    );
  }


}


/*
만약에 여러분이 만들 컴포넌트가 라이프사이클 API 도 사용하지 않고,
 state 도 사용하지 않고, 그냥 props 만 전달해주면 뷰를 렌더링만 해주는 
 역할이라면 함수형 컴포넌트 형식으로 컴포넌트를 정의 할 수 있습니다. 
 한번 예제를 살펴볼까요?

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
    </div>
  );
}
*/

export default App;
