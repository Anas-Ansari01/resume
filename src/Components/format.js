import React, { useRef } from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  Container,
  Paper,
  Chip,
  Link,
} from "@mui/material";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0.2,
      filename: "Kunal_Narang_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1.5 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <Paper
        elevation={3}
        sx={{ py: 2, borderRadius: 2, backgroundColor: "#ffffff", px:5 }}
        ref={resumeRef}
      >
        {/* Header */}
        <Box textAlign="center" mb={2}>
          <Typography
            variant="h6"
            color="primary"
            fontWeight="bold"
            textTransform="uppercase"
            sx={{ fontSize: "1rem" }}
          >
            Kunal Narang • Assistant Pharmacist
          </Typography>
          <Typography variant="body1"  sx={{ mt: 0.5, fontSize: "0.7rem", color: "text.secondary", fontWeight:'bold' }}>Registered Pharmacist (Uttar Pradesh)</Typography>
          <Typography
            variant="body2"
            sx={{ mt: 0.5, fontSize: "0.7rem", color: "text.secondary" }}
          >
            <Link href="mailto:k7895947075@gmail.com">
              k7895947075@gmail.com
            </Link>{" "}
            | +91-7379044501 | D.O.B - Sep 30, 1999
            <br />
            <strong>Permanent Address:</strong> 212, Vijay Nagar, Sindhi Colony,
            Gorakhnath, Gorakhpur - 273015
            <br />
            <strong>Current Address:</strong> 43/1, Sindhu Nagar, Krishna Nagar,
            Lucknow, - 226023
            <br />
            <Link
              href="https://www.linkedin.com/in/kunal-narang-7570681a7"
              target="_blank"
            >
              linkedin.com/in/kunal-narang-7570681a7
            </Link>
          </Typography>
        </Box>

        {/* Objective */}
        <Section title="Objective">
          <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
            To obtain an entry-level position in a dynamic organization where I
            can leverage my strengths, take on challenging tasks, and
            continuously grow by upgrading my skills and contributing
            effectively to team and organizational success.
          </Typography>
        </Section>

        {/* Work Experience */}
        <Section title="Experience">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              {
                title: "Territory Business Executive",
                company: "MicroLabs Pvt. Ltd.",
                location: "Lucknow",
                date: "Nov,2022 – June,2024",
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
            ].map((job, index) => (
              <Box key={index} sx={{ borderBottom: "1px solid #ccc", pb: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ fontSize: "0.75rem" }}
                  >
                    {job.title}, {job.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.65rem", color: "text.secondary" }}
                  >
                    {job.date} | {job.location}
                  </Typography>
                </Box>

                <Box component="ul" sx={{ pl: 3, pt: 0.5, mb: 0 }}>
                  {job.bullets.map((bullet, i) => (
                    <Box component="li" key={i} sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                        {bullet}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Section>

        {/* Education */}
        <Section title="Education">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {[
              {
                degree: "Bachelor of Pharmacy",
                institution: "Sardar Bhagwan Singh University",
                date: "2022",
                location: "Dehradun",
              },
              {
                degree: "Diploma of Pharmacy",
                institution: "Dev Bhoomi Group of Institute ",
                date: "2019",
                location: "Dehradun",
              },
              {
                degree: "Senior Secondary Examination",
                institution: "Navals National Academy ",
                date: "2017",
                location: "Gorakhpur",
              },
              {
                degree: "Secondary Examination",
                institution: "Navals National Academy",
                date: "2015",
                location: "Gorakhpur",
              },
            ].map((edu, index) => (
              <Box key={index} sx={{ borderBottom: "1px solid #ccc", pb: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      sx={{ fontSize: "0.75rem" }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.7rem" }}
                    >
                      {edu.institution}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.65rem" }}
                    >
                      {edu.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.65rem" }}
                    >
                      {edu.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Section>

        {/* Skills */}
        <Section title="Skills & Competencies">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
            {[
              "Clinical Applications",
              "Pharmaceutical Operations",
              "Patient Needs Assessment",
              "Patient Care & Counseling",
              "Leadership & Collaboration",
              "Inventory Management",
              "Microsoft Office",
              "Knowledge of Drugs & Remedies",
              "Marketing & Sales",
            ].map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="outlined"
                size="small"
                sx={{ fontSize: "0.65rem" }}
              />
            ))}
          </Box>
        </Section>

        {/* Certificates */}
        <Section title="Certificates">
          <List sx={{ pl: 2 }}>
            {[
              "Certification in Industrial Field Training",
              "WIPO PCT (Patent Cooperation Treaty)",
              "Webinar on Intellectual Property Rights (IPR)",
            ].map((item, i) => (
              <ListItem
                key={i}
                sx={{ fontSize: "0.7rem", py: 0.2, pl: 1, ml: -1 }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Section>

        {/* Languages */}
        <Section title="Languages">
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <Chip
              label="English – Professional Working Proficiency"
              size="small"
              sx={{ fontSize: "0.65rem" }}
            />
            <Chip
              label="Hindi – Professional Working Proficiency"
              size="small"
              sx={{ fontSize: "0.65rem" }}
            />
          </Box>
        </Section>
      </Paper>

      <button onClick={handleDownload} style={{ margin: "16px 0" }}>
        Download as PDF
      </button>
    </Container>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mt: 3 }}>
    <Divider sx={{ borderColor: "primary.main", mb: 1 }} />
    <Typography
      variant="subtitle1"
      color="primary"
      textTransform="uppercase"
      fontWeight="bold"
      sx={{ fontSize: "0.9rem" }}
    >
      {title}
    </Typography>
    <Box sx={{ mt: 0.5 }}>{children}</Box>
  </Box>
);

export default Resume;
