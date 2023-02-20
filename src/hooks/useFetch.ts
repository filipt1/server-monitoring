import axios from "axios";

import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    async function getData() {
      let response;

      try {
        response = await axios.get(API_URL + url, {
          cancelToken: cancelToken.token,
        });
      } catch (err: any) {
        if (err.name === "CanceledError") return;
        setError(err);
      }

      if (response?.status === 200) {
        setData(response.data);
        setLoading(false);
      }
    }

    getData();

    return () => cancelToken.cancel();
  }, []);

  return { data, loading, error };
};

export default useFetch;
