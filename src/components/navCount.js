import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../store/actions/counter";

export default function Navbar() {
  const {
    count: { counter },
  } = useSelector((state) => state);

  let value = counter;

  const dispatch = useDispatch();

  const decrement = () => {
    value--;
    dispatch(setCounter(value));
  };

  const increment = () => {
    value++;
    dispatch(setCounter(value));
  };

  return (
    <>
      <div className="container m-5 text-center">
        <div className="row">
          <div className="col-12">
            <h1>Counter App</h1>
          </div>
          <div className="col-12 my-5">
            <p>Counter: {counter}</p>
          </div>
          <div className="col-12">
            <button
              className="btn btn-danger me-4 fw-bold m-2 fw-bold"
              onClick={decrement}
            >
              -
            </button>
            <button
              className="btn btn-success fw-bold m-2 fw-bold"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
