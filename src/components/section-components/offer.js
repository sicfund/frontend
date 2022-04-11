import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Offer extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="offer-area pd-top-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-8">
			        <div className="section-title text-center">
			          <h2 className="title">SPECIAL MEMBERSHIP TIERS</h2>
			          <p>Get the most out of your membership to build your dream property.</p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="destinations-list-slider-bg">
			    <div className="container">
			      <div className="row">
					  <div class="col-sm">
					  	<div className="d-list-slider-item">
			              <div className="single-destinations-list">
			                <div className="thumb">
			                  <img src="/assets/img/destination-list/1.png" alt="list" />
			                  <div className="d-list-btn-wrap">
			                    
			                  </div>
			                </div>
			                <div className="details">
			                  <h4 className="title">2 x SIC-NFTs</h4>
			                  <p className="content"><ul><li>1X Governance Voting Power</li><li>Maintaining 2x SIC-NFTs in your wallet, will Unlock the SIC-Governance Channel in Discord</li><li>SIC-Governance will be made up of A group of like minded Degens working together to plan out the future of our slice of the island</li></ul></p>
							  <div className="tp-price-meta tp-price-meta-cl">
			                    <p>Price</p>
			                    <h2>0.3 ETH</h2>
			                  </div>
			                </div>
			              </div>
			            </div>
					  </div>
					  <div class="col-sm">
                        <div className="d-list-slider-item">
                            <div className="single-destinations-list">
                              <div className="thumb">
                                <img src="/assets/img/destination-list/2.png" alt="list" />
                                <div className="d-list-btn-wrap">
                                  
                                </div>
                              </div>
                              <div className="details">
                                <h4 className="title">5 x SIC-NFTs</h4>
                                <p className="content"><ul><li>3x Governance Voting Power</li><li>Maintaining 5x SIC-NFTs in your wallet, will Unlock the SIC-Governance Channel in Discord.</li><li>SIC-Governance will be made up of A group of like minded Degens working together to plan out the future of our slice of the island.</li></ul></p>
                                <div className="tp-price-meta tp-price-meta-cl">
                                  <p>Price</p>
                                  <h2>0.75 ETH</h2>
                                </div>
                              </div>
                            </div>
                          </div>
					  </div>
					  <div class="col-sm">
                        <div className="d-list-slider-item">
                            <div className="single-destinations-list">
                              <div className="thumb">
                                <img src="/assets/img/destination-list/3.png" alt="list" />
                                <div className="d-list-btn-wrap">
                                  
                                </div>
                              </div>
                              <div className="details">
                                <h4 className="title">15 x SIC-NFTs</h4>
                                <p className="content"><ul><li>6x Governance Voting Power</li><li>Maintaining 15x SIC-NFTs in your wallet, will Unlock the SIC-Governance Channel in Discord, A group of like minded Degens working together to plan out the future of our slice of the island.</li><li>Discounts on Short stays
  </li><li>Discord Role “SIC-Chad"
  </li> </ul>
  </p>
                                <div className="tp-price-meta tp-price-meta-cl">
                                  <p>Price</p>
                                  <h2>2.25 ETH </h2>
                                </div>
                              </div>
                            </div>
                          </div>
					  </div>
					  <div class="col-sm">
                        <div className="d-list-slider-item">
                            <div className="single-destinations-list">
                              <div className="thumb">
                                <span className="d-list-tag">Special Offer</span>
                                <img src="/assets/img/destination-list/15.png" alt="list" />
                                <div className="d-list-btn-wrap">
                                  
                                </div>
                              </div>
                              <div className="details" style={{backgroundColor: '#1C2A39'}}>
                                <h4 className="title" style={{color: 'white'}}>30x SIC-NFTs - POWER BACKER</h4>
                                <p className="content" style={{color: 'white'}}>
									<ul>					
  <li>10x Governance Voting Power For Discord</li>
  <li>Discounts on Short stays </li>
  <li>Discounts on Island Services </li>
  <li>1 x SPECIAL LIMITED "POWER-BACKER" NFT</li>
  <li>Access To "POWER-BACKER" Discord Channel for "POWER-BACKER" NFT holders. </li>
  <li>"POWER-BACKER"s can “buy out” the SIC-FUNDS Satoshi-Island land/Developments directly from the SIC-Foundation at 10% Discount.</li>
  <li>"POWER-BACKER" Discord role</li></ul>
  </p>
                                <div className="tp-price-meta tp-price-meta-cl" style={{color: 'white'}}>
                                  <p style={{color: 'white'}}>Price</p>
                                  <h2 style={{color: 'white'}}>4.5 ETH </h2>
                                </div>
                              </div>
                            </div>
                          </div>
					  </div></div></div></div></div>
						


        }
}

export default Offer