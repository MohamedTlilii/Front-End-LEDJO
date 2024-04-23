import React, { useState, useEffect } from "react";
import {
  TableBody,
  Button,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  Table,
  ModalHeader,
  ModalContent,
  ModalActions,
  Modal,
} from "semantic-ui-react";
import { useFetch } from "../../utils/useFetch";

function CartDetailsuserProducts({ setOpen2, open2, data }) {
  const [orders, setOrders] = useState([]);

  const { data: products, error } = useFetch(
    "https://back-end-ledjo.onrender.com/api/user/getOwnOrder"
  );

  useEffect(() => {
    if (products && products.length > 0) {
      setOrders(products); // Assuming the orders are directly fetched as an array
    }
  }, [products]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Modal
      className="cartdetailmodall"
      onClose={() => setOpen2(false)}
      open={open2}
      size="large"
    >
      <ModalHeader>Cart details</ModalHeader>
      <ModalContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell style={{ backgroundColor: "hsl(173, 95%, 42%)" }}>
                Product
              </TableHeaderCell>
              <TableHeaderCell style={{ backgroundColor: "hsl(173, 95%, 42%)" }}>
                Quantity
              </TableHeaderCell>
              <TableHeaderCell style={{ backgroundColor: "hsl(173, 95%, 42%)" }}>
                Unity Price
              </TableHeaderCell>
              <TableHeaderCell style={{ backgroundColor: "hsl(173, 95%, 42%)" }}>
                Image
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
                      <TableRow key={item._id}>
                        <TableCell>{item.productId.name}</TableCell> {/* Product name */}
                        <TableCell>{item.quantity}</TableCell> {/* Quantity */}
                        <TableCell>{item.productId.price}</TableCell> {/* Unity Price */}
                        <TableCell>{item.productId.image}</TableCell> {/* Image */}
                      </TableRow>
                    ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ModalContent>
      <ModalActions>
        <Button
          color="black"
          onClick={() => {
            setOpen2(false);
            console.log(open2);
          }}
        >
          Close
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default CartDetailsuserProducts;
