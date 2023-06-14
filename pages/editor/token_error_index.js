import React from "react";
import Layout from "../layout";
import { useState } from "react";

function Index() {
  const [user, setUser] = useState({});
  const [resultData, setResultData] = useState({})
  const [loading, setLoading] = useState(false);

  function setSomeJson() {
    console.log(process.env.KV_REST_API_URL);
    setLoading(true);
    fetch(
      `https://unified-anchovy-35119.kv.vercel-storage.com/set/resumeDebjit`,
      {
        headers: {
          Authorization: `Bearer tokeen`,
        },
        body: JSON.stringify(),
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setLoading(false);
    });
  }

  function getJson() {
    fetch(`https://unified-anchovy-35119.kv.vercel-storage.com/`, {
      headers: {
        Authorization: `Bearer token`,
      },
      body: '["GET", "resumeDebjit"]',
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const result = JSON.parse(data.result);
        console.log(result);
        setUser(result.user);
        setResultData(result);
        console.log(result.resume);
        console.log(result.user.name);
        console.log(result.user);
      });
  }

  return (
    <Layout>
      <div className="relative flex min-h-screen flex-col items-center justify-center top-0 w-96 h-96 mx-auto">
        Resume {loading && " is Loading..."}
        {user.name && <p>{user.name}</p>}
        {resultData.resume && <p>{resultData.resume.name}</p>}
        <div className="flex gap-2">
          <button
            onClick={() => setSomeJson()}
            className="btn bg-gray-50 rounded-full text-gray-950 py-2 px-4"
          >
            Store
          </button>
          <button
            onClick={() => getJson()}
            className="btn bg-gray-50 rounded-full text-gray-950 py-2 px-4"
          >
            Get
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
