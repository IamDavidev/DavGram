import useGiffys from "../hooks/useGiffys";
import GetGifs from "../services/GetGifs";

const Giffy = () => {
  const data = useGiffys({})
  console.log(data);
  return (
    <>
      <h1>Giffy</h1>
    </>
  );
};

export default Giffy;
