import './App.css';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar, CssBaseline, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  verifCode, 
          verifNom, 
          verifDate, 
          verifEmail } from '../src/verifFonction';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    email: '',
    date: '',
    ville: '',
    code: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [champRempli, setChampRempli] = useState(false);

  useEffect(() => {
    const sontTousRemplis = Object.values(formData).every(champ => champ);
    setChampRempli(sontTousRemplis);
  }, [formData]);

  const handleChampChange = champ => e => {
    setFormData(prevState => ({ ...prevState, [champ]: e.target.value.trim() }));
  };

  /** Valide le formulaire */
  const validateFormData = () => {
    const errors = {
      name: !verifNom(formData.name),
      prenom: !verifNom(formData.prenom),
      email: !verifEmail(formData.email),
      date: !verifDate(formData.date),
      ville: !verifNom(formData.ville),
      code: !verifCode(formData.code)
    };

    setFormErrors(errors);

    return Object.values(errors).every(error => !error);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (validateFormData()) {
      // Enregistrement des données
      localStorage.setItem('name', formData.name);
      localStorage.setItem('prenom', formData.prenom);
      localStorage.setItem('email', formData.email);
      localStorage.setItem('date', formData.date);
      localStorage.setItem('ville', formData.ville);
      localStorage.setItem('code', formData.code);

      toast.success('Vos données ont bien été enregistrées');

      // Reset des champs après une certaine durée
      setTimeout(() => {
        setFormData({
          name: '',
          prenom: '',
          email: '',
          date: '',
          ville: '',
          code: ''
        }, [formData]);
        window.location.reload();
      }, 6000);      
    } else {
      toast.error('Le formulaire est invalide');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'white'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ color: 'grey' }} component="h1" variant="h5">
              Formulaire
            </Typography>
            <Box
              sx={{
                marginTop: 5,
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                gridGap: 15,
                flexDirection: 'column'
              }}
              component="form"
              onSubmit={handleSubmit}
              noValidate
            >
              <TextField
                required
                id="name"
                label="Nom de famille"
                name="name"
                autoFocus
                onChange={handleChampChange('name')}
                error={formErrors.name}
              />
              <span>{formErrors.name && 'Le nom doit contenir que des lettres'}</span>
              <TextField
                required
                id="prenom"
                label="Prénom"
                name="prenom"
                onChange={handleChampChange('prenom')}
                error={formErrors.prenom}
              />
              <span>{formErrors.prenom && 'Le prénom doit contenir que des lettres'}</span>
              <TextField
                required
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChampChange('email')}
                error={formErrors.email}
              />
              <span>{formErrors.email && "L'email n'est pas valide"}</span>
              <TextField
                required
                id="date"
                label="Date de naissance"
                name="date"
                type="date"
                onChange={handleChampChange('date')}
                error={formErrors.date}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <span>{formErrors.date && "La date n'est pas valide, vous devez être majeur"}</span>
              <TextField
                required
                id="ville"
                label="Ville"
                name="ville"
                onChange={handleChampChange('ville')}
                error={formErrors.ville}
              />
              <span>{formErrors.ville && 'La ville doit contenir que des lettres'}</span>
              <TextField
                required
                id="code"
                label="Code Postal"
                name="code"
                onChange={handleChampChange('code')}
                error={formErrors.code}
              />
              <span>{formErrors.code && 'Le code postal doit contenir 5 chiffres'}</span>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!champRempli}
              >
                Valider
              </Button>
            </Box>
          </Box>
        </Container>
      </header>
      <ToastContainer />
    </div>
  );
}


export default App;
