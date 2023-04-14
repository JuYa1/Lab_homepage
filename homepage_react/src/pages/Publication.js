import React, { useEffect, useState } from "react";
import axios from "axios";
import Publications from "../component/\bpublications/Publications";

const Publication = () => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/send_csv");
        setPublications(res.data);
      } catch (err) {}
    })();
  }, []);
  return (
    <>
      <Publications publications={publications} />
    </>
  );
};

export default Publication;
