import { FaStar, FaUserAlt } from "react-icons/fa";
import profileImage from "../assets/react.svg";
import { RiUserAddFill } from "react-icons/ri";

const user = [
  {
    name: "Mike",
    age: 20,
    class: "Full-stack",
    image: "vite.svg",
  },
  {
    name: " John",
    age: 44,
    class: "Cyber-security",
    image: profileImage,
  },
  {
    name: "Esther",
    age: 29,
    class: "Digital-marketer",
    image: "vite.svg",
  },
  {
    name: "David",
    age: 19,
    class: "Data-Analyst",
    image: "vite.svg",
  },
];

const User = () => {
  return (
    <div className="p-[100px]">
      {user.map((u, index) => (
        <article
          key={index}
          className="border-2 border-gray-100 w-fit p-3 rounded-lg shadow-md"
        >
          <img src={u.image} alt="profile-image group" />
          <p className="font-semibold">name:{u.name}</p>
          <p className="font-semibold">age:{u.age}</p>
          <p className="font-semibold">class:{u.class}</p>
        </article>
      ))}
    </div>
  );
};

export default User;
