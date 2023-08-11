import { KeyboardEvent } from 'react';
import './main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Main() {
    const [qty, setQty] = useState(1);
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState([]);

   


    function addtocart(code: any){
        axios({
            url: 'http://127.0.0.1:8001/api/cart-add',
            method: 'GET',
            params: {
                code: code,
                qty: qty
            }
        }).then(function (response) {
            lookup();
        }).catch(function (error) {
            console.log('Error fetching data:', error);
        });
    }

    function lookup(){
        axios({
            url: 'http://127.0.0.1:8001/api/cart-list',
            method: 'GET',
            params: {}
        }).then(function (response) {
            setItems(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.log('Error fetching data:', error);
        });
    }

    const itemSearch = (event: KeyboardEvent<HTMLInputElement>) => {
        const keyPressed = event.key;
        const inputValue = event.currentTarget.value;
        switch (keyPressed) {
            case 'Enter':
                addtocart(inputValue);
                break;
            case '-':
                event.preventDefault();
                if (qty <= 1) {
                    setQty(1);
                } else {
                    setQty((prevQtyMinus) => prevQtyMinus - 1);
                }
                break;
            case '+':
                setQty((prevQtyMinus) => prevQtyMinus + 1);
                event.preventDefault();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        lookup();
    }, []);

    return (
        <div className="nk-app-root">
            <div className="nk-wrap ">-
                <div className="nk-header is-light" style={{ backgroundColor: '#344E5C', border: 'none' }}>
                    <div className="container-fluid">
                        <div className="nk-header-wrap">
                            <div className="nk-menu-trigger me-sm-2 d-lg-none">
                                <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em className="icon ni ni-menu"></em></a>
                            </div>
                            <div className="nk-header-brand">
                                <a href="html/index.html" className="logo-link">
                                    <img className="logo-light logo-img" src="./images/logo.png" alt="logo" />
                                    <img className="logo-dark logo-img" src="./images/logo-dark.png" alt="logo-dark" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nk-content" style={{ padding: '0', paddingRight: '0' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3" style={{ backgroundColor: '#344E5C', marginTop: '0', position: 'relative', minHeight: '585px' }}>
                                <div className="mt-1">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a href="#" className="btn btn-lg btn-block btn-info" style={{ letterSpacing: '1px' }}>
                                                <br /><br />
                                                <span>CHECKOUT</span> <br />
                                                <em style={{ fontSize: '44px', marginRight: '10px' }} className="icon ni ni-cart"></em><br />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-md-6 row-left">
                                            <a href="#" className="btn btn-lg btn-block btn-light bg-white" style={{ display: 'grid', textTransform: 'uppercase' }}>
                                                <center><img src='./assets/images/application.png' style={{ height: '40px', color: '#4AB19D' }} className="icon ni ni-search" /></center>
                                                <p className='mt-1' style={{ fontSize: '13px' }}> Costumer OPTIONS</p>
                                            </a>
                                        </div>

                                        <div className="col-md-6 row-right">
                                            <a href="#" className="btn btn-lg btn-block btn-light bg-white" style={{ display: 'grid', textTransform: 'uppercase' }}>
                                                <center><img src='./assets/images/search.png' style={{ height: '40px', color: '#4AB19D' }} className="icon ni ni-search" /></center>
                                                <p className='mt-1' style={{ fontSize: '13px' }}> Product Lookup</p>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row mt-1">
                                        <div className="col-md-6 row-left">
                                            <a href="#" className="btn btn-lg btn-block btn-danger" style={{ display: 'grid', textTransform: 'uppercase' }}>
                                                <center><img src='./assets/images/cross.png' style={{ height: '40px', color: '#4AB19D' }} className="icon ni ni-search" /></center>
                                                <p className='mt-1' style={{ fontSize: '13px' }}> VOID <br /> INVOICE</p>
                                            </a>
                                        </div>
                                        <div className="col-md-6 row-right">
                                            <a href="#" className="btn btn-lg btn-block btn-light bg-white" style={{ display: 'grid', textTransform: 'uppercase' }}>
                                                <center><img src='./assets/images/account.png' style={{ height: '40px', color: '#4AB19D' }} className="icon ni ni-search" /></center>
                                                <p className='mt-1' style={{ fontSize: '13px' }}> ACCOUNT SETTINGS</p>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row mt-1">
                                        <div className="col-md-12 row-left">
                                            <h6 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', float: 'left', marginLeft: '12px', marginTop: '15px' }}>: Today</h6>
                                            <br />
                                            <br />
                                            <center>
                                                <h3 style={{ color: '#fff', letterSpacing: '1px' }}>JULY 25, 2023</h3>
                                                <h5 style={{ color: '#eee', letterSpacing: '3px' }}> 12:43:23PM</h5>
                                                <hr style={{ width: '200px' }} />
                                                <img height={60} style={{ marginLeft: '50px' }} src="./bitsyst-light.png" alt="" />
                                            </center>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-9 mt-2" style={{ backgroundColor: '#F3F6F9', margin: '0', textAlign: 'left' }} >
                                <div className="row">
                                    <div className="col-md-3">
                                        <button style={{ fontSize: '13px', letterSpacing: '2px' }} className="btn btn-round btn-warning btn-lg btn-block">
                                            NEW TRANSACTION
                                        </button>
                                    </div>
                                    <div className="col-md-2">
                                        <input type="number" style={{ textAlign: 'center' }} className="form-control form-control-lg" id="default-03" placeholder="Qty" min={1} defaultValue={qty} value={qty} />
                                    </div>
                                    <div className="col-md-7">
                                        <input onKeyPress={itemSearch} type="text" style={{ textAlign: 'left' }} className="form-control form-control-lg" id="default-03" placeholder=".. Bacode ID here &#128270;" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="card card-bordered">
                                            <div className="card-body" style={{ padding: '0', maxHeight: '500px', height: '380px', overflowX: 'auto' }}>
                                                <div className="table-responsive">
                                                    <table className="table table-responsive table-ulogs">
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th className="tb-col-ip" style={{ width: '100px', textAlign: 'center' }}>
                                                                    <span className="overline-title">Action</span>
                                                                </th>
                                                                <th className="tb-col-ip" style={{ width: '100px', textAlign: 'right' }}>
                                                                    <span className="overline-title">Total</span>
                                                                </th>
                                                                <th className="tb-col-ip" style={{ width: '100px', textAlign: 'right' }}>
                                                                    <span className="overline-title">Qty</span>
                                                                </th>
                                                                <th className="tb-col-ip" style={{ width: '100px', textAlign: 'right' }}>
                                                                    <span className="overline-title">Price</span>
                                                                </th>
                                                                <th className="tb-col-ip" style={{ width: '100px', textAlign: 'center' }}>
                                                                    <span className="overline-title">Unit/Size</span>
                                                                </th>
                                                                <th className="tb-col-os">
                                                                    <span className="overline-title">
                                                                        <b className='m-2'>Product Information</b>
                                                                    </span>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody style={{color: 'black'}}>
                                                            {
                                                                items.map(
                                                                    (item) =>
                                                                        <tr>
                                                                            <td className="tb-col-action active" style={{ textAlign: 'center' }}>
                                                                                <a href="#" className="link-cross me-sm-n1">
                                                                                    <em className="icon ni ni-cross"></em>
                                                                                </a>
                                                                            </td>
                                                                            <td className="tb-col-os" style={{ textAlign: 'right' }}>
                                                                                <span className="m-2">{item['cart_subtotal']}</span>
                                                                            </td>
                                                                            <td className="tb-col-os" style={{ textAlign: 'right' }}>
                                                                                <span className="m-2">{item['cart_qty']}</span>
                                                                            </td>
                                                                            <td className="tb-col-os" style={{ textAlign: 'right' }}>
                                                                                <span className="m-2">{item['cart_price']}</span>
                                                                            </td>
                                                                            <td className="tb-col-os" style={{ textAlign: 'center' }}>
                                                                                <span className="m-2">{item['inv_unit']}</span>
                                                                            </td>
                                                                            <td className="tb-col-os" style={{ textAlign: 'left' }}>
                                                                                <span className="m-2">{item['inv_item']}</span>
                                                                            </td>
                                                                        </tr>
                                                                )
                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="card-footer border-top text-muted">
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <center>
                                                            <span style={{ color: '#505050' }}>GRAND TOTAL</span>
                                                            <h1><b style={{ color: 'red', letterSpacing: '1px' }}>15,754.64</b></h1>
                                                        </center>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <table className="table table-ulogs">
                                                            <tr>
                                                                <td style={{ textAlign: 'left', color: '#000', letterSpacing: '1px' }}>
                                                                    <b>34</b>
                                                                </td>
                                                                <td style={{ textAlign: 'right', width: '130px', color: '#000', letterSpacing: '1px' }}>: ITEM COUNT</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: 'left', color: '#000', letterSpacing: '1px' }}>
                                                                    <b>15,754.64</b>
                                                                </td>
                                                                <td style={{ textAlign: 'right', width: '180px', color: '#000', letterSpacing: '1px' }}>: SUB TOTAL (PHP)</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: 'left', color: '#000', letterSpacing: '1px' }}>
                                                                    <b>84.50</b>
                                                                </td>
                                                                <td style={{ textAlign: 'right', width: '130px', color: '#000', letterSpacing: '1px' }}>: DISCOUNT</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;