import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 900, // Medium devices (small laptops)
      lg: 1200, // Large devices (desktops)
      xl: 1536 // Extra large screens
    }
  },
  palette: {
    mode: 'light',

    primary: {
      main: '#283D7A',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#EC4A0E',
      light: '#ff5983',
      dark: '#bb002f',
      contrastText: '#ffffff'
    },
    background: {
      default: '#F0F3FD',
      paper: '#ffffff'
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      white: '#fff',
      success: '#A3DE3A',
      error: '#FF2C2C',
      disabled: '#999999'
    },
    grey: {
      light: '#BDBDBD',
      dark: '#676C74'
    }
  },

  fonts: {
    primary: 'DM Sans, sans-serif', // For body text
    secondary: 'New Spirit Regular' // For headings
  },

  textSizes: {
    small: '14px', // 14px
    medium: '16px', // 16px
    large: '1.125rem', // 18px
    xl: '1.25rem' // 20px
  },

  typography: {
    fontFamily: 'DM Sans, sans-serif',

    h1: {
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (min-width:600px)': { fontSize: '2.25rem' }, // sm
      '@media (min-width:900px)': { fontSize: '2.50rem' }, // md
      '@media (min-width:1200px)': { fontSize: '2.75rem' }, // lg
      '@media (min-width:1536px)': { fontSize: '3rem' } // xl
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.3,
      '@media (min-width:600px)': { fontSize: '2rem' },
      '@media (min-width:900px)': { fontSize: '2.25rem' },
      '@media (min-width:1200px)': { fontSize: '2.50rem' },
      '@media (min-width:1536px)': { fontSize: '2.75rem' }
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: 1.3,
      '@media (min-width:600px)': { fontSize: '1.75rem' },
      '@media (min-width:900px)': { fontSize: '2rem' },
      '@media (min-width:1200px)': { fontSize: '2.25rem' },
      '@media (min-width:1536px)': { fontSize: '2.5rem' }
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (min-width:600px)': { fontSize: '1.50rem' },
      '@media (min-width:900px)': { fontSize: '1.75rem' },
      '@media (min-width:1200px)': { fontSize: '2rem' },
      '@media (min-width:1536px)': { fontSize: '2.25rem' }
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (min-width:600px)': { fontSize: '1.25rem' },
      '@media (min-width:900px)': { fontSize: '1.50rem' },
      '@media (min-width:1200px)': { fontSize: '1.75rem' },
      '@media (min-width:1536px)': { fontSize: '2rem' }
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      '@media (min-width:600px)': { fontSize: '0.75rem' },
      '@media (min-width:900px)': { fontSize: '1rem' },
      '@media (min-width:1200px)': { fontSize: '1.25rem' },
      '@media (min-width:1536px)': { fontSize: '1.5rem' }
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      '@media (min-width:600px)': { fontSize: '0.750rem' },
      '@media (min-width:900px)': { fontSize: '0.875rem' },
      '@media (min-width:1200px)': { fontSize: '1rem' },
      '@media (min-width:1536px)': { fontSize: '1.25rem' }
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      '@media (min-width:600px)': { fontSize: '0.675rem' },
      '@media (min-width:900px)': { fontSize: '0.775rem' },
      '@media (min-width:1200px)': { fontSize: '0.875rem' },
      '@media (min-width:1536px)': { fontSize: '0.975rem' }
    },
    subtitle1: {
      fontSize: '0.625rem',
      fontWeight: 400,
      lineHeight: 1.6,
      '@media (min-width:600px)': { fontSize: '0.475rem' },
      '@media (min-width:900px)': { fontSize: '0.755rem' },
      '@media (min-width:1200px)': { fontSize: '0.625rem' },
      '@media (min-width:1536px)': { fontSize: '0.775rem' }
    },
    button: {
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
      '@media (min-width:600px)': { fontSize: '1rem' },
      '@media (min-width:900px)': { fontSize: '1.125rem' },
      '@media (min-width:1200px)': { fontSize: '1.25rem' },
      '@media (min-width:1536px)': { fontSize: '1.375rem' }
    }
  },

  components: {
    // Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '8px 16px'
        },
        containedPrimary: {
          backgroundColor: '#283D7A',
          color: '#fff',
          width: '100%',
          borderRadius: '8px',
          fontSize: '0.875rem !important',
          '&:hover': { backgroundColor: '#283D7A' },
          '&.Mui-disabled': {
            backgroundColor: '#B0B0B0', // Grey color for disabled buttons
            color: '#fff', // Text color for disabled buttons
            opacity: 0.7 // Adjust opacity if needed
          }
        },
        containedSecondary: {
          backgroundColor: '#EC4A0E',
          color: '#fff',
          width: '100%',
          borderRadius: '8px',
          fontSize: '0.875rem !important',
          '&:hover': { backgroundColor: '#EC4A0E' },
          '&.Mui-disabled': {
            backgroundColor: '#EC4A0E90', // Grey color for disabled buttons
            color: '#fff', // Text color for disabled buttons
            opacity: 0.7 // Adjust opacity if needed
          }
        },

        outlined: {
          backgroundColor: '#ffffff',
          color: 'primary',
          width: '100%',
          borderRadius: '8px',
          fontSize: '0.875rem !important',
          '&:hover': { backgroundColor: '#ffffff' },
          '&.Mui-disabled': {
            backgroundColor: '#EC4A0E90', // Grey color for disabled buttons
            color: '#fff', // Text color for disabled buttons
            opacity: 0.7 // Adjust opacity if needed
          }
        },

        outlinedSecondary: {
          backgroundColor: '#f3f3f3',
          color: 'primary',
          width: '100%',
          borderRadius: '8px',
          fontSize: '0.875rem !important',
          '&:hover': { backgroundColor: '#f3f3f3' },
          '&.Mui-disabled': {
            backgroundColor: '#f3f3f3', // Grey color for disabled buttons
            color: '#fff', // Text color for disabled buttons
            opacity: 0.7 // Adjust opacity if needed
          }
        }
      }
    },

    // Text Fields
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Rounded corners
            height: '2.5rem',
            '& input': {
              fontFamily: 'DM Sans, sans-serif',
              // padding: '0px', // Remove extra padding inside the input
              fontSize: '1rem' // Reduce font size if needed
            },
            '& .MuiOutlinedInput-input': {
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 100px #fff inset',
                WebkitTextFillColor: 'default'
              }
            },
            '& fieldset': { borderColor: '#cccccc' },
            '&:hover fieldset': { borderColor: '#1976d2' },
            '&.Mui-focused fieldset': { borderColor: '#1565c0' }
          },
          '& .MuiInputLabel-root': {
            fontSize: '1rem', // 16px in rem
            color: '#333'
          }
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem !important', // 16px in rem
          color: '#333', // Label color
          mt:'1rem !important',
          fontWeight:500
        },
        shrink: {
          fontSize: '1rem !important' // Ensures the font size remains 16px when focused
        }
      }
    },

    // Select (Dropdowns)
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '2.5rem', 
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.875rem !important',
          borderRadius:'8px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#cccccc' 
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1565c0' 
          }
        }
      }
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem !important', 
          fontFamily: 'DM Sans, sans-serif',
          '&:hover': {
            backgroundColor: '#f5f5f5 !important', // Light gray hover effect
          },
        },
      },
    },

    // Lists
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0px'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#f5f5f5'
          }
        }
      }
    },

    // Cards
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
          padding: '16px'
        }
      }
    },

    // Dialogs (Modals)
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
          padding: '16px'
        }
      }
    },

    // AppBar (Navbar)
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2'
        }
      }
    },

    // Tabs
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '40px'
        },
        indicator: {
          backgroundColor: '#1976d2'
        }
      }
    },

    // Table
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold'
        }
      }
    }
  }
})

export default theme
