import React, { useEffect, useState } from "react";

const Map = () => {
  const [data, setData] = useState();
  const [coordinate, setCoordinate] = useState();

  useEffect(() => {
    const url = `https://api.ipdata.co/es?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e`;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setCoordinate(`${json.latitude}, ${json.longitude}`);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (data) {
    return (
      <iframe
        title="google map"
        width="600"
        height="450"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCpKtmoCt1ieQzWvk7YwAtaePKFH6k3sGY&center=${coordinate}
          &q=${data.city}, ${data.country_name}+${data.country_code}`}
      ></iframe>
    );
  } else {
    return (
      <>
        {" "}
        <h1>Loading</h1>
      </>
    );
  }
};
export default Map;
