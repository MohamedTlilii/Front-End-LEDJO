import React, { useState, useEffect } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import { useFetch } from "../../utils/useFetch";
import "./CartItemsProfile.scss";
import CartDetailsuserProdcuts from "../CartDetailsuserProdcuts/CartDetailsuserProdcuts";

const CartItemsProfile = () => {
  const [orders, setOrders] = useState([]);
  const [open2, setOpen2] = useState(false);

  const token = localStorage.getItem("token");

  const { data: products, error } = useFetch(
    "https://back-end-ledjo.onrender.com/api/user/getOwnOrder",
    token
  );

  // console.log("API Response:", products);

  useEffect(() => {
    if (products && products.length > 0) {
      setOrders(products); // Assuming the orders are directly fetched as an array
    }
  }, [products]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // console.log("Orders:", orders); // Log the orders array

  return (
    <div className="orders-container-user">
      <div className="table-data-user">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell
                style={{ backgroundColor: "hsl(173, 95%, 42%)" }}
              >
                Order ID
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: "hsl(173, 95%, 42%)" }}
              >
                Products
              </TableHeaderCell>
              {/* <TableHeaderCell
              style={{ backgroundColor: "hsl(173, 95%, 42%)" }}
            >
              Quantity
            </TableHeaderCell> */}
              <TableHeaderCell
                style={{ backgroundColor: "hsl(173, 95%, 42%)" }}
              >
                IsConfirmed
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: "hsl(173, 95%, 42%)" }}
              >
                IsDelivered
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: "hsl(173, 95%, 42%)" }}
              >
                Createdate
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: "hsl(173, 95%, 42%)" }}
              >
                Total
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>
                  {order.cart &&
                    order.cart.map((item) => (
                      <div key={item._id}>
                        <TableCell>{item.productId.name}</TableCell>{" "}
                        {/* Product name */}
                        <TableCell>{item.quantity}</TableCell> {/* Quantity */}
                      </div>
                    ))}
                </TableCell>

                <TableCell>{order.isConfirmed ? "Yes" : "No"}</TableCell>
                <TableCell>{order.isDelivered ? "Yes" : "No"}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableCell
          onClick={() => {
            setOpen2(true); // Open the modal when this cell is clicked
          }}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          See Details
        </TableCell>
        <CartDetailsuserProdcuts
          data={orders} // Pass the orders data to CartDetails
          setOpen2={setOpen2}
          open2={open2}
        />
      </div>
    </div>
  );
};

export default CartItemsProfile;
