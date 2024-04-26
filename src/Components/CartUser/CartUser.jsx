import { useState, useEffect } from "react";
import axios from "axios";
import { useFetch } from "../../utils/useFetch";
import "./CartUser.scss";
import { url } from "../../utils/url";

import {
  Icon,
  Button,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  ModalHeader,
  ModalContent,
  ModalActions,
  Modal,
  Form,
} from "semantic-ui-react";
import { RingLoader } from "react-spinners"; // Import RingLoader from react-spinners
import { toast } from "react-toastify";


function CartUser() {
  let token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  const [updateUserPic, setUpdateUserPic] = useState();
  const [loadingP, setLoadingP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { data, isLoading, error } = useFetch(
    "https://back-end-ledjo.onrender.com/api/user/getInformation",
    token
  );
  useEffect(() => {
    console.log("Data from API:", data); // Add this console log to check the data
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message if API call fails
  }

  // Check if data is available before accessing its properties
  if (!data) {
    return (
      <div>
        {" "}
        <RingLoader size={70} color="hsl(329, 68%, 44%)" />
      </div>
    );
  }
  const handleUpdateUser = () => {
    // setLoading(true);
    axios
      .put(`${url}/updateInformation`, newUserData, {
        headers: { token },
      })

      .then((res) => {
        setLoading(false);
        toast.success("User informations was updated successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(false);
      })
      .catch((err) => {
        // setLoading(false);
        console.dir(err);
        setOpen(false);
      });
  };
  const handleUpdatePhoto = () => {
    setLoadingP(true);
    let userData = new FormData();
    userData.append("photo", updateUserPic);
    axios
      .put(`${url}/updatePhoto`, userData, {
        headers: { token },
      })
      .then((res) => {
        setLoadingP(false);

        toast.success("Profile Picture was updated successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(false);
      })
      .catch((err) => {
        // setLoading(false);
        console.dir(err);
        setOpen(false);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };
  return (
    <div>
      <div className="user-cards">
        <div className="card">
          <div className="image">
            <img src={data.imageUrl} alt={data.userName} />
          </div>
          <div className="content">
            <div className="header">{data.userName}</div>
            <div className="meta">
              <Icon name="mail" />
              {data.email}
            </div>
            {/* <div className="description">
              Matthew is an interior designer living in New York.
            </div> */}
          </div>
          <div className="extra content">
            <Button
              className="btnbtntbnprofil"
              onClick={() => {
                setOpen(true);
              }}
            >
              Edit
            </Button>
            <span className="right floated">
              {data.createdAt.substring(0, 10)}
            </span>
            {/* <span> */}
            {/* {data.createdAt.substring(11, data.createdAt.length - 8)} */}

            {/* </span> */}
          </div>
        </div>
      </div>

      <>
        {/* edit user modal */}
        <Modal
          className="modal"
          style={{
            width: "50%",
            height: "40%",
            position: "absolute",
            left: "500px",
            top: "300px",
          }}
          onClose={() => setOpen(false)}
          open={open}
        >
          <ModalHeader>Update Information</ModalHeader>
          <ModalContent>
            <Form>
              <Form.Group>
                <label>
                  <input
                    // style={{ width: "927px", height: "50px" }}
                    type="file"
                    name="photo"
                    onChange={(e) => {
                      setUpdateUserPic(e.target.files[0]);
                    }}
                  />
                  <Button
                    onClick={() => {
                      handleUpdatePhoto();
                    }}
                    loading={loadingP}
                  >
                    Update photo
                  </Button>
                </label>
              </Form.Group>
              <Form.Group
                widths="equal"
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <Form.Input
                  type="text"
                  placeholder="UserName"
                  name="userName"
                />
              </Form.Group>
              <Form.Group
                widths="equal"
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <Form.Input type="email" placeholder="Email" name="email" />
              </Form.Group>
              <Form.Group
                widths="equal"
                onChange={(e) => {
                  setNewUserData({
                    ...newUserData,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <Form.Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={newUserData.password || ""}
                  onChange={handleInputChange}
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  content={showPassword ? "Hide" : "Show"}
                />
              </Form.Group>
            </Form>
          </ModalContent>
          <ModalActions>
            <Button color="black" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              // style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              type="button"
              positive
              loading={loading}
              onClick={() => {
                handleUpdateUser();
              }}
            >
              Update
            </Button>
          </ModalActions>
        </Modal>
      </>
    </div>
  );
}

export default CartUser;
