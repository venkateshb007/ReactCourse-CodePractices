import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        sno: "10VN",
        image: "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg",
        name: "smart watch",
        price: 4000,
        qty: 2,
      
      },
    };
  }

  incQty = () => {
    this.setState({
        product:{
            ...this.state.product,
            qty : this.state.product.qty + 1
        }
    })
  }

  decQty = () => {
    this.setState({
       product:{
        ...this.state.product,
        qty:(this.state.product.qty - 1 > 0) ? this.state.product.qty -1 : 1
       }
    })
  }

  render() {

    let {product} = this.state;
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-primary">Cart Item</p>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates qui corporis sit, incidunt nihil molestias! Esse
                  ullam nostrum illo odio!
                </p>
              </div>
            </div>
          </div>
        </section>
        <pre>{JSON.stringify(this.state)}</pre>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <table className="table table-hover text-center table-primary table-striped ">
                  <thead>
                    <tr>
                      <th>SNO</th>
                      <th>Image</th>
                      <th>NAME</th>
                      <th>PRICE</th>
                      <th>QTY</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{product.sno}</td>
                      <td>
                        <img
                          src={product.image}
                          width="50"
                          height="50"
                          alt=""
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>&#8377;{product.price}</td>
                      <td>
                        <i className="fa fa-minus-circle mx-1" onClick={this.decQty} />
                        {product.qty}
                        <i className="fa fa-plus-circle mx-1" onClick={this.incQty}/>

                      </td>
                      <td>&#8377;{this.state.product.price * this.state.product.qty}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CartItem;
