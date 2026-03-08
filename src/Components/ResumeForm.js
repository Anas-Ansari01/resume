import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const ResumeForm = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "Kunal Narang",
    title: "Assistant Pharmacist",
    registration: "Registered Pharmacist (Uttar Pradesh)",
    contact: {
      email: "k7895947075@gmail.com",
      phone: "+91-7379044501",
      dob: "Sep 30, 1999",
      permanentAddress:
        "212, Vijay Nagar, Sindhi Colony, Gorakhnath, Gorakhpur - 273015",
      currentAddress:
        "43/1, Sindhu Nagar, Krishna Nagar, Lucknow, - 226023",
      linkedin: "https://www.linkedin.com/in/kunal-narang-7570681a7",
    },
    objective:
      "To obtain an entry-level position in a dynamic organization where I can leverage my strengths, take on challenging tasks, and continuously grow by upgrading my skills and contributing effectively to team and organizational success.",
    experience: [
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
    ],
    education: [
      {
        degree: "Bachelor of Pharmacy",
        institution: "Sardar Bhagwan Singh University",
        date: "2022",
        location: "Dehradun",
      },
    ],
    skills: [
      "Clinical Applications",
      "Pharmaceutical Operations",
      "Patient Needs Assessment",
    ],
    certificates: [
      "Certification in Industrial Field Training",
      "WIPO PCT (Patent Cooperation Treaty)",
    ],
    languages: [
      "English – Professional Working Proficiency",
      "Hindi – Professional Working Proficiency",
    ],
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNestedChange = (section, index, key, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[index][key] = value;
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleSubmit = () => {
    onUpdate(formData);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6">Edit Resume</Typography>

      <TextField
        fullWidth
        label="Full Name"
        margin="normal"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        fullWidth
        label="Title"
        margin="normal"
        value={formData.title}
        onChange={(e) => handleChange("title", e.target.value)}
      />
      <TextField
        fullWidth
        label="Objective"
        margin="normal"
        multiline
        minRows={3}
        value={formData.objective}
        onChange={(e) => handleChange("objective", e.target.value)}
      />

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Experience</Typography>
      {formData.experience.map((job, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Job Title"
                value={job.title}
                onChange={(e) =>
                  handleNestedChange("experience", index, "title", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Company"
                value={job.company}
                onChange={(e) =>
                  handleNestedChange("experience", index, "company", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location"
                value={job.location}
                onChange={(e) =>
                  handleNestedChange("experience", index, "location", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Date"
                value={job.date}
                onChange={(e) =>
                  handleNestedChange("experience", index, "date", e.target.value)
                }
              />
            </Grid>
          </Grid>
        </Box>
      ))}

      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 3 }}>
        Save and Preview
      </Button>
    </Box>
  );
};

export default ResumeForm;