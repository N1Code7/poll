"use client";

import Button from "@/components/Button";
import { Squircle } from "corner-smoothing";

const UnidentifiedPoll = () => {
  return (
    <Squircle as={"div"} cornerRadius={8}>
      <Button>Je me connecte</Button>
      <form></form>
    </Squircle>
  );
};

export default UnidentifiedPoll;
