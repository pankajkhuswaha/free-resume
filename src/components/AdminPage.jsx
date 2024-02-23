import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../feature/authslice";

const AdminPage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="flex w-full items-center justify-center h-screen">
      Welcome Admin <br /> {JSON.stringify(user)}
    </div>
  );
};

export default AdminPage;
