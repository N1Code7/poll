"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { Squircle } from "corner-smoothing";
import Link from "next/link";

const LoginMainContent = () => {
  return (
    <Squircle as={"main"} cornerRadius={8} className="login">
      <Input id="email" label="Email" />
      <Input type="password" id="password" label="Mot de passe" />
      <Link href={"/"}>Mot de passe oublié ?</Link>
      <Button type="form">Je me connecte</Button>
    </Squircle>
  );
};

export default LoginMainContent;
