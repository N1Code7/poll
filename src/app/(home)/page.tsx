import Header from "@/layouts/Header";
import prisma from "@/lib/prisma";
import UnidentifiedPoll from "./UnidentifiedPoll";

const Home = async () => {
  const users = await prisma.user.findMany();
  console.log(users);

  return (
    <div>
      <Header />

      <UnidentifiedPoll />
    </div>
  );
};

export default Home;
