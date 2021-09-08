import React, { Component } from 'react';
import CheckedCartList from './CheckedCartList';
import './CheckedPriceInfo.scss';

class CheckedPriceInfo extends Component {
  render() {
    const { cartListData } = this.props;

    return (
      <aside className="checkedInfo">
        {cartListData &&
          cartListData.map(data => {
            return (
              <CheckedCartList
                key={data.id}
                checkedProductName={data.name}
                checkedProductPrice={data.price}
              />
            );
          })}
        <div className="checkedPriceInfo">
          <div className="eachProduct">
            <span>1개 상품</span>
            <span>139,000원</span>
          </div>
          <div className="postPrice">
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div className="productTax">
            <span>부가세 포함</span>
            <span>0원</span>
          </div>
          <div className="totalPrice">
            <span>총 결제금액</span>
            <span>139,000원</span>
          </div>
        </div>
        <div className="checkedAddress">
          <span>
            <i class="fas fa-truck"></i>
            일반배송
          </span>
          <span>
            {this.props.gender} {this.props.name}
          </span>
          {this.props.mobile}
          {this.props.zipCode}
          <span>{this.props.detailAddress}</span>
          <span>{this.props.address}</span>
        </div>
      </aside>
    );
  }
}

export default CheckedPriceInfo;
