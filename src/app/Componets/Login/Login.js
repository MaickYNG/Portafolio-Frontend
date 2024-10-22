"use client";  

import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showMsg, setProfile } from "../Adm/redux/appSlice";
import { useRouter } from "next/navigation";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();  

  async function doLogin(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/adm/login`,
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw await response.json();
      }
      const data = await response.json();
      const storage = window.localStorage;
      storage.setItem("username", data.user.username);
      storage.setItem("fullname", data.user.fullname);

      dispatch(
        setProfile({
          username: data.user.username,
          fullname: data.user.fullname,
        })
      );
      dispatch(showMsg({ msgText: data.message }));

      router.push("/");  
    } catch (err) {
      dispatch(showMsg({ msgText: err.message, msgType: "danger" }));
    }
  }

  return (
    <Card className="my-2">
      <Card.Body>
        <Card.Title>Ingreso usuario ADM</Card.Title>
        <Form onSubmit={doLogin}>
          <Form.Group className="mb-3" controlId="form.username">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Ingresar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
