import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {fruit: 0, count: 0}

  onEatMangoes = () => {
    this.setState(prevState => ({fruit: prevState.fruit + 1}))
  }

  onEatBananas = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {fruit, count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate {fruit} mangoes {count} bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              className="image"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              className="image"
              alt="banana"
            />
            <div>
              <button
                type="button"
                className="mango-btn"
                onClick={this.onEatMangoes}
              >
                Eat Mango
              </button>
              <button
                type="button"
                className="banana-btn"
                onClick={this.onEatBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
