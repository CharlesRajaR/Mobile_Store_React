import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">
                    Products
                </p>
            </div>
             <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">
                    Name Of Products
                </p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">
                    Price:
                </p>
            </div>
             <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">
                    Quantity
                </p>
            </div>
             <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">
                    remove
                </p>
            </div>
             <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">
                    Total
                </p>
            </div>
             {/* <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">
                    Products
                </p>
            </div> */}
        </div>
    </div>
  )
}
