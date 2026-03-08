// src/App.jsx
import React, { useState, useRef } from "react";
import { Container, Grid, Button } from "@mui/material";
import html2pdf from "html2pdf.js";
import Editor from "./Components/Editor";
import Resume from "./Components/Resume";

const App = () => {
  const resumeRef = useRef();

  const [data, setData] = useState({
    personal: {
      name: "Kunal Narang",
      email: "k7895947075@gmail.com",
      phone: "+91-7379044501",
      dob: "Sep 30, 1999",
      addressPermanent: "212, Vijay Nagar, Sindhi Colony, Gorakhnath, Gorakhpur - 273015",
      addressCurrent: "43/1, Sindhu Nagar, Krishna Nagar, Lucknow, - 226023",
      linkedin: "https://www.linkedin.com/in/kunal-narang-7570681a7"
    },
    objective:
      "To obtain an entry-level position in a dynamic organization where I can leverage my strengths, take on challenging tasks, and continuously grow by upgrading my skills and contributing effectively to team and organizational success.",
    experience: [
      {
        title: "Territory Business Executive",
        company: "MicroLabs Pvt. Ltd.",
        location: "Lucknow",
        date: "Nov 2022 – June 2024",
        bullets: [
          "Meet healthcare professionals to promote company products, explain their benefits, and increase brand awareness and prescription rates.",
          "Develop strong relationships with doctors, clinics, and hospitals to drive sales, gather market feedback, and ensure customer satisfaction.",
          "Gather insights on market trends, customer needs, and competitor activities to help shape effective marketing strategies and achieve sales targets.",
        ],
      },
      {
        title: "Chemical Analyser",
        company: "India Glycols Limited",
        location: "Lucknow",
        date: "Nov 2021 – Dec 2021",
        bullets: [
          "Perform qualitative and quantitative analysis of chemical substances using laboratory instruments to ensure compliance with safety and quality standards.",
          "Record test data accurately, analyze results, and prepare detailed reports to support research, product development, or quality control processes.",
        ],
      },
      {
        title: "Assistant Pharmacist",
        company: "Lok Bandhu Raj Narayan Hospital",
        location: "Lucknow",
        date: "June 2019 – Oct 2019",
        bullets: [
          "Assist the pharmacist in preparing and dispensing prescriptions, ensuring correct labeling and dosage as per the doctor's instructions.",
          "Monitor stock levels, check for expired medications, and help manage pharmacy documentation and patient records efficiently.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Pharmacy",
        institution: "Sardar Bhagwan Singh University",
        date: "2022",
        location: "Dehradun",
      },
      {
        degree: "Diploma of Pharmacy",
        institution: "Dev Bhoomi Group of Institute",
        date: "2019",
        location: "Dehradun",
      },
      {
        degree: "Senior Secondary Examination",
        institution: "Navals National Academy",
        date: "2017",
        location: "Gorakhpur",
      },
      {
        degree: "Secondary Examination",
        institution: "Navals National Academy",
        date: "2015",
        location: "Gorakhpur",
      },
    ],
    skills: [
      "Clinical Applications",
      "Pharmaceutical Operations",
      "Patient Needs Assessment",
      "Patient Care & Counseling",
      "Leadership & Collaboration",
      "Inventory Management",
      "Microsoft Office",
      "Knowledge of Drugs & Remedies",
      "Marketing & Sales",
    ],
    certificates: [
      "Certification in Industrial Field Training",
      "WIPO PCT (Patent Cooperation Treaty)",
      "Webinar on Intellectual Property Rights (IPR)",
    ],
    languages: [
      "English – Professional Working Proficiency",
      "Hindi – Professional Working Proficiency",
    ],
  });

  const handleDownload = () => {
    const opt = {
      margin: 0.2,
      filename: `${data.personal.name.replace(" ", "_")}_Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(resumeRef.current).save();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Editor data={data} setData={setData} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Resume data={data} resumeRef={resumeRef} />
          <Button variant="contained" onClick={handleDownload} sx={{ mt: 2 }}>
            Download as PDF
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
