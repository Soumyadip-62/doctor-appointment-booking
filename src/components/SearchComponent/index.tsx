import { Doctor } from "@/typescript/Interfaces/doctor";
import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch("/assets/json/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));
  }, []);

  //   const [selectedPerson, setSelectedPerson] = useState(people[0]);
  //   const [query, setQuery] = useState("");

  //   const filteredPeople =
  //     query === ""
  //       ? people
  //       : people.filter((person) => {
  //           return person.toLowerCase().includes(query.toLowerCase());
  //         });
  return (
    <div className="">
      {doctors.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
         
        </div>
      ))}
    </div>
  );
};

export default SearchComponent;
