import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Car: NextPage = () => {
  const { query } = useRouter()

  return <div>Car
    <Link href="/">Home</Link>
    {query.id && 
    <div>{query.id}</div>}
  </div>;
};

export default Car;
