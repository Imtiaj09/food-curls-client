import React from "react";
import team1 from "../../../assets/images/team/team1.jpg";
import team2 from "../../../assets/images/team/team2.jpg";

const Team = () => {
  return (
    <section class="bg-white rounded shadow">
      <div class="container px-6 py-10 mx-auto">
        <div class="xl:flex xl:items-center xL:-mx-4">
          <div class="xl:w-1/2 xl:mx-4">
            <h1 class="text-3xl font-semibold text-black capitalize lg:text-4xl ">
              Our Team
            </h1>
            <p class="max-w-2xl mt-4 text-black ">
              "Alone we can do so little; together we can do so much."
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <img
                class="object-cover rounded-xl aspect-square"
                src={team1}
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize ">
                John Doe
              </h1>

              <p class="mt-2 text-black capitalize ">Head Chef </p>
            </div>

            <div>
              <img
                class="object-cover rounded-xl aspect-square"
                src={team2}
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                Mia
              </h1>

              <p class="mt-2 text-black capitalize ">Chef</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
