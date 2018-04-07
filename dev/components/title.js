import {h, Component} from 'composi'

export const title = new Component({
  container: 'header',
  render: (message) => {
    return (
      <nav>
        <i className="fa fa-btc fa-3x my-auto d-inline-block" style={{color: '#FFC107'}}></i>
        <h1>Composi {message}</h1>
      </nav>
    )
  }
})
