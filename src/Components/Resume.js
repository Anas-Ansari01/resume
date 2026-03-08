// src/components/Resume.jsx
import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  Paper,
  Chip,
  Link,
} from "@mui/material";

const Resume = ({ data, resumeRef }) => {
  const {
    personal,
    objective,
    experience,
    education,
    skills,
    certificates,
    languages,
  } = data;

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }} ref={resumeRef}>
      {/* Header */}
      <Box textAlign="center" mb={2}>
        <Typography
          variant="h6"
          color="primary"
          fontWeight="bold"
          textTransform="uppercase"
          sx={{ fontSize: "1rem" }}
        >
          {personal.name} • Assistant Pharmacist
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 0.5,
            fontSize: "0.7rem",
            color: "text.secondary",
            fontWeight: "bold",
          }}
        >
          Registered Pharmacist (Uttar Pradesh)
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 0.5, fontSize: "0.7rem", color: "text.secondary" }}
        >
          <Link href={`mailto:${personal.email}`}>{personal.email}</Link> |{" "}
          {personal.phone} | D.O.B - {personal.dob}
          <br />
          {/* <strong>Permanent Address:</strong> {personal.addressPermanent}
          <br /> */}
          <strong>Address:</strong> {personal.addressCurrent}
          <br />
          <Link href={personal.linkedin} target="_blank">
            {personal.linkedin}
          </Link>
        </Typography>
      </Box>

      {/* Objective */}
      <Section title="Objective">
        <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
          {objective}
        </Typography>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        {experience.map((job, index) => (
          <Box
            key={index}
            sx={{ borderBottom: "1px solid #ccc", pb: 1, mb: 1, mt: 2 }}
          >
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

            <Box component="ul" sx={{ pl: 3, pt: 0, mb: 0 }}>
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


      </Section>


      {/* Education */}
      <Section title="Education">
        <Box
          sx={{ borderBottom: "1px solid #ccc", pb: 1, mb: 1 }}
        >
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
                Master in Pharmacy (GPAT Qualified)
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.7rem", color: "text.secondary" }}
              >
                Lucknow Model College of Pharmacy
              </Typography>
            </Box>
            <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.65rem", color: "text.secondary" }}
              >
                Pursuing
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.65rem", color: "text.secondary" }}
              >
                Lucknow
              </Typography>
            </Box>
          </Box>
        </Box>
        {education.map((edu, index) => (
          <Box
            key={index}
            sx={{ borderBottom: "1px solid #ccc", pb: 1, mb: 1 }}
          >
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
                  sx={{ fontSize: "0.7rem", color: "text.secondary" }}
                >
                  {edu.institution}
                </Typography>
              </Box>
              <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.65rem", color: "text.secondary" }}
                >
                  {edu.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.65rem", color: "text.secondary" }}
                >
                  {edu.location}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Section>

      {/* Skills */}

      <Section title="Skills & Competencies">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill, i) => (
            <Chip
              key={i}
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
          {certificates.map((item, i) => (
            <ListItem
              key={i}
              sx={{ fontSize: "0.7rem", py: 0.2, pl: 1, ml: -1 }}
            >
              {item}
            </ListItem>
          ))}

          <ListItem
            sx={{ fontSize: "0.7rem", py: 0.2, pl: 1, ml: -1 }}
          >
            GPAT Qualified (2025)
          </ListItem>
        </List>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
          {languages.map((lang, i) => (
            <Chip
              key={i}
              label={lang}
              size="small"
              sx={{ fontSize: "0.65rem" }}
            />
          ))}
        </Box>
      </Section>

      {/* 🔹 STATIC CAREER GAP (HARD-CODED) */}
      <Box
        sx={{
          borderBottom: "1px solid #ccc",
          pb: 1,
          mb: 1,
          mt: 3,
          borderRadius: 1,
        }}
      >
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
            sx={{ fontSize: "0.75rem", fontStyle: "italic" }}
          >
            {/* Unplanned Career Break – Family Care */}
            Note:
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{ fontSize: "0.7rem", fontStyle: "italic" }}
        >
          Took an unplanned career break to provide primary care to my mother
          during a medical situation, after which I resumed my professional path.
        </Typography>
      </Box>

    </Paper>
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
