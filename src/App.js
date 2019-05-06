import React from "react";
import './App.css';
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Images from './components/images.json';

class App extends React.Component{
  state = {
    images: Images,
    score: 0,
    clickedImages: [],
    totalClick: 0
  }

endGame(){
  if (this.state.totalClick === 13){
    alert("Game Over!")
    this.setState({
      score: 0,
      clickedImages: [],
      totalClick: 0
    })
  };
  var imageClicked = this.state.clickedImages;
  console.log("ID", this.state.clickedImages)
  console.log("Clicked", App.alt )
    if(imageClicked.includes(this.alt)){  
      alert("Game Over!")
      this.setState({
      score: 0,
      clickedImages: [],
      totalClick: 0
      })
    }
  
}


handleShuffle(id) {
  if (!this.state.clickedImages.includes(id)) {
    this.setState({
      score: this.state.score + 1,
      clickedImages: [...this.state.clickedImages, id]
    });
  }
  this.setState({
    images: this.state.images.sort(() => Math.random() - 0.5),
    totalClick: this.state.totalClick + 1
  });
  this.endGame();
}

render() {
  return (
    <div className = "App">
    <Nav score={this.state.score} />
    <Header />
    <Main>
     {this.state.images.map(i => (
       <Card
       key = {i.id}
       name = {i.name}
       image = {i.image}
       onClick={() => this.handleShuffle(i.id)}
       />
     ))}
     </Main>
     <Footer />
    </div>
  );
}
}

export default App;
