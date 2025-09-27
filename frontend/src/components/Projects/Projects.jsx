import React from "react";
import "./Projects.css";
import chatty from "../../assets/chatty.png";
import progrss_pad from "../../assets/progrss_pad.png";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
  const ProjectsData = [
    {
      title: "Chatty",
      desc: "My first Chat Application using MERN Stack and Socket.io. It supports real-time messaging, multiple chat rooms, and user authentication. Built with a focus on simplicity and performance, Chatty provides a seamless communication experience.",
      li: [
        "Technologies: MongoDB, Express, React, Node.js, Socket.io",
        "Features: Real-time messaging, multiple chat rooms, user authentication",
        "GitHub: https://github.com/shlokarth911/chatty.git",
      ],
      img: chatty,
      gitLink: "https://github.com/shlokarth911/chatty.git",
    },

    {
      title: "Progrss Pad",
      desc: "A productivity app designed to help users set and track their goals effectively. With features like task management, progress tracking, and reminders, Progrss Pad empowers users to stay organized and motivated on their journey to success.",
      li: [
        "Technologies: MERN Stack, Tailwind CSS",
        "Features: Task management, progress tracking, Pomodoro Timer",
      ],
      img: progrss_pad,
      gitLink: "https://github.com/shlokarth911/progrss_pad",
    },

    {
      title: "Gathr (Upcoming)",
      desc: "Gathr helps organizers and communities create, manage, and discover events in one place. Users can create events, RSVP/join, and communicate (chat/updates) while hosts can track attendees and moderate gatherings. Built for meetups, clubs, small conferences, and casual get-togethers,it makes coordinating people and schedules simple.",
      li: [
        " Technologies: MERN Stack, Tailwind CSS, MongoDB Atlas, Cloudinary",
        " Features: Event creation, RSVP/join, real-time chat, notifications, dashboard, analytics",
      ],
      img: "",
      gitLink: "https://github.com/shlokarth911/gathr",
    },
  ];

  return (
    <div className="projects-container">
      <div className="project-card-container">
        {ProjectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            desc={project.desc}
            item={project.li}
            img={project.img}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
