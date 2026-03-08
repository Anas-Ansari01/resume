// src/components/Editor.jsx
import React from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const Editor = ({ data, setData }) => {
  const handleChange = (section, key, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleArrayChange = (section, index, key, value) => {
    const newArray = [...data[section]];
    newArray[index][key] = value;
    setData((prev) => ({
      ...prev,
      [section]: newArray,
    }));
  };

  const handleListChange = (section, index, value) => {
    const newArray = [...data[section]];
    newArray[index] = value;
    setData((prev) => ({
      ...prev,
      [section]: newArray,
    }));
  };

  const addArrayItem = (section, newItem) => {
    setData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const removeArrayItem = (section, index) => {
    const newArray = data[section].filter((_, i) => i !== index);
    setData((prev) => ({
      ...prev,
      [section]: newArray,
    }));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Section title="Personal Information">
        <Grid container spacing={2}>
          {["name", "email", "phone", "dob", "linkedin", "addressPermanent", "addressCurrent"].map((field) => (
            <Grid item xs={12} sm={6} key={field}>
              <TextField
                fullWidth
                label={field.replace(/([A-Z])/g, " $1")}
                value={data.personal[field]}
                onChange={(e) => handleChange("personal", field, e.target.value)}
              />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section title="Objective">
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Objective"
          value={data.objective}
          onChange={(e) => setData((prev) => ({ ...prev, objective: e.target.value }))}
        />
      </Section>

      <Section title="Experience">
        {data.experience.map((exp, i) => (
          <Box key={i} sx={{ mb: 2, border: "1px solid #ccc", borderRadius: 2, p: 2 }}>
            <Grid container spacing={2}>
              {["title", "company", "location", "date"].map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    fullWidth
                    label={key}
                    value={exp[key]}
                    onChange={(e) => handleArrayChange("experience", i, key, e.target.value)}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Bullets
            </Typography>
            {exp.bullets.map((b, bi) => (
              <Box key={bi} display="flex" alignItems="center" gap={1} mt={1}>
                <TextField
                  fullWidth
                  value={b}
                  onChange={(e) =>
                    handleArrayChange("experience", i, "bullets", [
                      ...exp.bullets.slice(0, bi),
                      e.target.value,
                      ...exp.bullets.slice(bi + 1),
                    ])
                  }
                />
                <IconButton onClick={() => {
                  const updatedBullets = exp.bullets.filter((_, idx) => idx !== bi);
                  handleArrayChange("experience", i, "bullets", updatedBullets);
                }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() => handleArrayChange("experience", i, "bullets", [...exp.bullets, ""])}
              sx={{ mt: 1 }}
            >
              Add Bullet
            </Button>
            <Box mt={1}>
              <Button
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => removeArrayItem("experience", i)}
              >
                Remove Experience
              </Button>
            </Box>
          </Box>
        ))}
        <Button
          startIcon={<AddIcon />}
          onClick={() =>
            addArrayItem("experience", {
              title: "",
              company: "",
              location: "",
              date: "",
              bullets: [""],
            })
          }
        >
          Add Experience
        </Button>
      </Section>

      <Section title="Education">
        {data.education.map((edu, i) => (
          <Grid container spacing={2} key={i} sx={{ mb: 1 }}>
            {["degree", "institution", "location", "date"].map((key) => (
              <Grid item xs={12} sm={6} key={key}>
                <TextField
                  fullWidth
                  label={key}
                  value={edu[key]}
                  onChange={(e) => handleArrayChange("education", i, key, e.target.value)}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => removeArrayItem("education", i)}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
        <Button
          startIcon={<AddIcon />}
          onClick={() =>
            addArrayItem("education", {
              degree: "",
              institution: "",
              location: "",
              date: "",
            })
          }
        >
          Add Education
        </Button>
      </Section>

      <SimpleListEditor
        title="Skills & Competencies"
        section="skills"
        data={data}
        onChange={setData}
      />
      <SimpleListEditor
        title="Certificates"
        section="certificates"
        data={data}
        onChange={setData}
      />
      <SimpleListEditor
        title="Languages"
        section="languages"
        data={data}
        onChange={setData}
      />
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h6" color="primary" gutterBottom>
      {title}
    </Typography>
    {children}
  </Box>
);

const SimpleListEditor = ({ title, section, data, onChange }) => {
  return (
    <Section title={title}>
      {data[section].map((item, i) => (
        <Box key={i} display="flex" alignItems="center" gap={1} mt={1}>
          <TextField
            fullWidth
            value={item}
            onChange={(e) => {
              const updated = [...data[section]];
              updated[i] = e.target.value;
              onChange((prev) => ({ ...prev, [section]: updated }));
            }}
          />
          <IconButton
            onClick={() => {
              const updated = data[section].filter((_, idx) => idx !== i);
              onChange((prev) => ({ ...prev, [section]: updated }));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        startIcon={<AddIcon />}
        onClick={() => onChange((prev) => ({ ...prev, [section]: [...prev[section], ""] }))}
        sx={{ mt: 1 }}
      >
        Add {title}
      </Button>
    </Section>
  );
};

export default Editor;
