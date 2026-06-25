"use client";

import { useState } from "react";
import styles from "./ProjectsTable.module.css";

interface Project {
  no: number;
  client: string;
  projectName: string;
  location: string;
  status: "Delivered" | "Ongoing";
}

export default function ProjectsTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Delivered" | "Ongoing">("All");

  const projectsData: Project[] = [
    { no: 1, client: "Belayab Enterprise", projectName: "High voltage electrical installation for car assembly plant", location: "Adama", status: "Delivered" },
    { no: 2, client: "Weyera Transport", projectName: "Electrical installation for G+7 mixed used building", location: "Addis Ababa", status: "Delivered" },
    { no: 3, client: "Trust Construction", projectName: "Electrical installation for G+5 building", location: "Dessie", status: "Delivered" },
    { no: 4, client: "Trust Construction", projectName: "Electrical installation, Controlling board & assembly for WWTP infrastructure", location: "Dessie University", status: "Delivered" },
    { no: 5, client: "Mesfin Industrial Engineering", projectName: "PEB(Pre Engineering Building)", location: "Bole Lemi Industry Zone Addis Ababa", status: "Delivered" },
    { no: 6, client: "Ybel Industrial", projectName: "AC Installation & Building Installation", location: "Gambela", status: "Delivered" },
    { no: 7, client: "Ybel Industrial", projectName: "Transformer Erection", location: "Awash Arba", status: "Delivered" },
    { no: 8, client: "Ybel Industrial", projectName: "YaYu Fertilizer Factory PEB (Pre Engineering Building)", location: "YaYu Elubabur", status: "Delivered" },
    { no: 9, client: "KalityBeretaberet", projectName: "Transformer Maintenance", location: "Addis Ababa Kality", status: "Delivered" },
    { no: 10, client: "Nehemiah Engineering", projectName: "Machine Maintenance", location: "Addis Ababa Kality", status: "Delivered" },
    { no: 11, client: "Akwos Construction & Aluminum work", projectName: "Electrical & Mechanical work (for weyera Transport)", location: "Addis Ababa", status: "Delivered" },
    { no: 12, client: "Akwos Construction & Aluminum work", projectName: "Building Electrical installation & Generator Erection For B+G+9", location: "Addis Ababa", status: "Ongoing" },
    { no: 13, client: "Geez Construction", projectName: "Master Printing press Expansion project Electrical & Machine Erection", location: "Addis Ababa", status: "Delivered" },
    { no: 14, client: "Geez Construction", projectName: "South TVET College Electrical Installation", location: "Mizan Tepii", status: "Delivered" },
    { no: 15, client: "Geez Construction", projectName: "Furnished Apartment Electrical Installation, Mechanical & Generator Erection", location: "Addis Ababa Sarbet", status: "Ongoing" },
    { no: 16, client: "SGAM Construction", projectName: "Building Electrical installation & Machine Erection", location: "A.A Nifasa Silk Bole Technique college", status: "Ongoing" },
    { no: 17, client: "SGAM Construction", projectName: "SCANIA workshop Electrical Installation & machine Erection", location: "A.A Saris", status: "Ongoing" }
  ];

  // Filtering
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.client.toLowerCase().includes(search.toLowerCase()) ||
      project.projectName.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase());
      
    const matchesStatus = statusFilter === "All" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <section id="projects" className={`section-padding ${styles.projects}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerArea}>
          <span className={styles.subtitle}>Track Record</span>
          <h2 className={styles.title}>Featured Projects & Clients</h2>
          <p className={styles.intro}>
            We have a proven history of success delivering complex electrical and mechanical installations across Ethiopia.
          </p>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search by client, project, or location..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${statusFilter === "All" ? styles.filterActive : ""}`}
              onClick={() => setStatusFilter("All")}
            >
              All Projects
            </button>
            <button
              className={`${styles.filterBtn} ${statusFilter === "Delivered" ? styles.filterActive : ""}`}
              onClick={() => setStatusFilter("Delivered")}
            >
              Delivered
            </button>
            <button
              className={`${styles.filterBtn} ${statusFilter === "Ongoing" ? styles.filterActive : ""}`}
              onClick={() => setStatusFilter("Ongoing")}
            >
              Ongoing
            </button>
          </div>
        </div>

        {/* Projects Table */}
        <div className={styles.tableWrapper}>
          {filteredProjects.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "80px" }}>No.</th>
                  <th>Client Name</th>
                  <th>Project Details</th>
                  <th>Location</th>
                  <th style={{ width: "160px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.no}>
                    <td>#{project.no}</td>
                    <td className={styles.clientName}>{project.client}</td>
                    <td className={styles.projectName}>{project.projectName}</td>
                    <td className={styles.location}>{project.location}</td>
                    <td>
                      <span className={`badge ${project.status === "Delivered" ? "badge-success" : "badge-warning"}`}>
                        <span style={{ fontSize: "0.5rem" }}>●</span> {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.emptyState}>
              <p>No projects match your search or filter selection.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
