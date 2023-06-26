// import age from './data.js'
// import {age, name} from './data/js'

export default function Cart() {
    let 장바구니 = ['토마토', '파스타']

    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
          <p>가격</p>
          <p>수량</p>
        </div>
        <CartItem item={장바구니[0]} price="2,000" quantity="1개" />
        <CartItem item={장바구니[1]} price="8,000" quantity="1개" />
      </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
          <p>{ props.item }</p>
          <p>{ props.price }</p>
          <p>{ props.quantity }</p>
        </div>
    )
}
