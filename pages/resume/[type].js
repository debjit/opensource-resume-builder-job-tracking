import React from "react";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  const { type } = router.query;
  return <div>{type}</div>;
}

export default Page;
