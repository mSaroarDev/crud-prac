"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const New = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const res = await fetch("http://localhost:3000/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.status === 201) {
        router.refresh();
        alert("Data added");
        resetForm();
      } else {
        alert("Failed to create");
      }
    },
  });

  return (
    <>
      <div className="center">
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Name"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add to list
            </Button>{" "}
            <br />
            <Link className="mt-5 d-inline" href={"/list"}>
              List
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

export default New;
