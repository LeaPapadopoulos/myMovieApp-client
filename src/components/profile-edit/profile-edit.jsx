import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ProfileEdit = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birth: birthday,
    };

    fetch(`https://mymovieapp.herokuapp.com/users/${user.username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        alert("User information updated");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Username: </Form.Label>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3"
      />

      <Form.Label>Password: </Form.Label>
      <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Form.Label>Email: </Form.Label>
      <Form.Control
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Form.Label>Birthday: </Form.Label>
      <Form.Control
        type="date"
        value={
          birthday ? new Date(birthday).toISOString().substring(0, 10) : ""
        }
        onChange={(e) => setBirthday(e.target.value)}
        required
      />

      <Button variant="primary" type="submit" className="my-2">
        Update
      </Button>
    </Form>
  );
};
