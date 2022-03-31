import React from 'react';
import './Detail.css';
import DetailBanner from './DetailBanner';
export default function Detail() {
  return (
    <div id="detail" className="border-top">
      <DetailBanner />
      <div className="detail_content container mx-auto my-16">
        <div className="d_content_big flex w-3/4 m-auto ">
          <div className="img w-3/4">
            <img
              className=" mb-9"
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/single-product-01.jpg"
              alt=""
            />
            <img
              className=" my-1.5"
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/single-product-02.jpg"
              alt=""
            />
          </div>
          <div className="right-content w-1/4">
            <div>
              <h4>New Green Jacket</h4>
              <span className="price">$75.00</span>
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor
                incididunt ut labore.
              </span>
              <div className="quote">
                <i className="fa fa-quote-left" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
              </div>
              <div className="quantity-content">
                <div className="left-content">
                  <h6>No. of Orders</h6>
                </div>
                <div className="right-content">
                  <div className="quantity buttons_added">
                    <input type="button" defaultValue="-" className="minus" />
                    <input
                      type="number"
                      step={1}
                      min={1}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                      className="input-text qty text"
                      size={4}
                    />
                    <input type="button" defaultValue="+" className="plus" />
                  </div>
                </div>
              </div>
              <div className="total">
                <h4>Total: $210.00</h4>
                <div className="main-border-button">
                  <a href="#">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
