"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Home = () => {
  const router = useRouter();

  const homepage = () => {
    router.replace("/");
  };

  const newPage = () => {
    router.replace("/new");
  };

  const listPage = () => {
    router.replace("/list");
  };

  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="center">
      <ButtonGroup aria-label="Basic example">
        <Button onClick={homepage} variant="primary">
          Home
        </Button>
        <Button onClick={newPage} variant="primary">
          Add New
        </Button>
        <Button onClick={listPage} variant="primary">
          List
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Home;
