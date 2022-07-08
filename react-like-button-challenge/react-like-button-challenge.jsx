import { Component } from 'react';
const INITALCOUNT = 100;

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: INITALCOUNT
    };

    this.increaseAndDecrease = this.increaseAndDecrease.bind(this);
  }

  increaseAndDecrease() {
    if (this.state.counter > INITALCOUNT) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
    if (this.state.counter <= INITALCOUNT) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <button
            className={
              this.state.counter > 100 ? 'liked like-button' : 'like-button'
            }
            onClick={this.increaseAndDecrease}
          >
            Like | <span className="likes-counter">{this.state.counter}</span>
          </button>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
