import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { setFormData } from './App';

describe('Test d\'intégration de l\'application', () => {

    it('check fonctionnement bouton valider', () => {
        render(<App />);
        const button = screen.getByText('Valider');
        expect(button).toBeDisabled();
        //recherche par le label associé le i signifie que c'est insensible à la casse
        fireEvent.change(screen.getByLabelText(/Nom de famille/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Prénom/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.fr' } });
        fireEvent.change(screen.getByLabelText(/Date de naissance/i), { target: { value: '2021-09-01' } });
        fireEvent.change(screen.getByLabelText(/Ville/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Code Postal/i), { target: { value: '06250' } });    
        expect(button).toBeEnabled();  
        });


    it('verification message erreur', async () => {
        render(<App />);
        fireEvent.change(screen.getByLabelText(/Nom de famille/i), { target: { value: '123' } });
        fireEvent.change(screen.getByLabelText(/Prénom/i), { target: { value: '456' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john' } });
        fireEvent.change(screen.getByLabelText(/Date de naissance/i), { target: { value: '2020-01-01' } });
        fireEvent.change(screen.getByLabelText(/Ville/i), { target: { value: '789' } });
        fireEvent.change(screen.getByLabelText(/Code Postal/i), { target: { value: 'A06250' } });
        fireEvent.click(screen.getByText('Valider'));
        expect(await screen.findByText('Le nom doit contenir que des lettres')).toBeInTheDocument();
        expect(await screen.findByText('Le prénom doit contenir que des lettres')).toBeInTheDocument();
        expect(await screen.findByText('L\'email n\'est pas valide')).toBeInTheDocument();
        expect(await screen.findByText('La date n\'est pas valide, vous devez être majeur')).toBeInTheDocument();
        expect(await screen.findByText('La ville doit contenir que des lettres')).toBeInTheDocument();
        expect(await screen.findByText('Le code postal doit contenir 5 chiffres')).toBeInTheDocument();
    });


    it('validation formulaire', async () => {
        render(<App />);
        fireEvent.change(screen.getByLabelText(/Nom de famille/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Prénom/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.fr' } });
        fireEvent.change(screen.getByLabelText(/Date de naissance/i), { target: { value: '2000-09-01' } });
        fireEvent.change(screen.getByLabelText(/Ville/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Code Postal/i), { target: { value: '06250' } }); 
        fireEvent.click(screen.getByText('Valider'));

        expect(await screen.findByText('Vos données ont bien été enregistrées')).toBeInTheDocument();

        expect(localStorage.getItem('name')).toBe('test');
        expect(localStorage.getItem('prenom')).toBe('test');
        expect(localStorage.getItem('email')).toBe('test@test.fr');
        expect(localStorage.getItem('date')).toBe('2000-09-01');
        expect(localStorage.getItem('ville')).toBe('test');
        expect(localStorage.getItem('code')).toBe('06250');

    });

    it('validation formulaire', async () => {
        render(<App />);
        const button = screen.getByText('Valider');

        fireEvent.change(screen.getByLabelText(/Nom de famille/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Prénom/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.fr' } });
        fireEvent.change(screen.getByLabelText(/Date de naissance/i), { target: { value: '2000-09-01' } });
        fireEvent.change(screen.getByLabelText(/Ville/i), { target: { value: 'test' } });
        fireEvent.change(screen.getByLabelText(/Code Postal/i), { target: { value: '06250' } }); 

        expect(button).toBeEnabled();

        fireEvent.change(screen.getByLabelText(/Nom de famille/i), { target: { value: '' } });

        expect(button).toBeDisabled();        

    });
    // it('should throw a "missing param p" error', () => {
    //     expect(() => calculateAge()).toThrow('missing param p');
    // })

    
});
