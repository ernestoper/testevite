import React, { useState } from "react";

import { projects, filters } from "./Data";
import Div from "./Div";

const Trabajos = () => {
    const [selectedTag, setSelectedTag] = useState("all");
    const [projectData, setProjectData] = useState(projects);

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "all") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };

    return (
        <div id="work" className="mt-10 relative">
            {/* SECTION HEADING START */}
            <div className="mb-10">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
                    Ultimos Trabalhos
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
                    Nosso compromisso é oferece o melhor servoço para os nossos clientes confira alguns produtos entregues:
                </div>
            </div>
            {/* SECTION HEADING END */}

            {/* FILTER TAGS START */}
            <div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
                {filters.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
                            selectedTag === item.id
                                ? "bg-[#EFB946] text-black"
                                : ""
                        }`}
                        onClick={() => filterHandler(item.id)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            {/* FILTER TAGS START */}

            {/* PROJECTS GRID START */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {projectData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
                                <img
                                    src={item.image}
                                    className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                                />
                            </div>
                            <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                                {item.name}
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* PROJECTS GRID START */}
        </div>
    );
};

export default Trabajos;
