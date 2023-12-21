"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { Squircle } from "corner-smoothing";
import Link from "next/link";

const LoginForm = () => {
  return (
    <Squircle cornerRadius={8}>
      <form>
        <Input id="email" label="Email" />
        <Input type="password" id="password" label="Mot de passe" />
        <Link href={"/"}>Mot de passe oublié ?</Link>
        <Button level="form">Je me connecte</Button>
        <Button level="form2">Je crée mon compte</Button>
      </form>
    </Squircle>
  );
};

export default LoginForm;
