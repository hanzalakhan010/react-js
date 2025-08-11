import { Box, Button, TextField, Typography, Grid } from '@mui/material'
import React, { useContext, useState } from 'react'
import { SiteContext } from '../context/SiteContent'
import { useNavigate } from 'react-router'

const AddNewSite = () => {
  const navigate = useNavigate()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = Math.ceil(Math.random() * 10000)
    setSiteList([{ id, ...newSite }, ...siteList])
    navigate('/')
  }
  const { siteList, setSiteList } = useContext(SiteContext)
  const [newSite, setNewSite] = useState({
    title: '',
    da: 0,
    url: '',
    contact: '',
  })
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        maxWidth: 600,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Add / Edit Entry
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Title
          </Typography>
          <TextField
            fullWidth
            name="title"
            placeholder="Enter title"
            value={newSite.title}
            onChange={(e) => setNewSite({ ...newSite, title: e.target.value })}
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Domain Authority (DA)
          </Typography>
          <TextField
            fullWidth
            name="da"
            type="number"
            placeholder="Enter DA"
            value={newSite.da}
            onChange={(e) => setNewSite({ ...newSite, da: parseInt(e.target.value) })}

            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            URL
          </Typography>
          <TextField
            fullWidth
            name="url"
            placeholder="Enter website URL"
            value={newSite.url}
            onChange={(e) => setNewSite({ ...newSite, url: e.target.value })}

            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Contact Details
          </Typography>
          <TextField
            fullWidth
            name="contact"
            multiline
            rows={3}
            value={newSite.contact}
            onChange={(e) => setNewSite({ ...newSite, contact: e.target.value })}

            placeholder="Enter contact details"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddNewSite