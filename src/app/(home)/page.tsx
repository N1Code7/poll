import Header from "@/layouts/Header";
import { useSession } from "next-auth/react";
import UnidentifiedPoll from "./UnidentifiedPoll";

const Home = async () => {
  // const { data: session, status } = useSession();

  // if (session) {
  //   return <p>You are connected!</p>;
  // }

  return (
    <div>
      <Header />
      <UnidentifiedPoll />
    </div>
  );
};

export default Home;
