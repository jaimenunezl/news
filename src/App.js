import React, { Component } from "react";
import Header from "./components/Header";
import ListNews from "./components/ListNews";
import Search from "./components/Search";

class App extends Component {
  initialState = { news: [] };

  state = { ...this.initialState };

  componentDidMount() {
    this.getNews();
  }

  getNews = async (category = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=006e22622e164b259d31d1a572c912c0`;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({ news: news.articles });
  };

  render() {
    return (
      <div>
        <Header title="USA News" />
        <Search getNews={this.getNews} />
        <div className="container white">
          <ListNews news={this.state.news} />
        </div>
      </div>
    );
  }
}

export default App;
