import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';



test('Test de rendu initial', () => {
  render(<App />);
  // Vérifiez que le composant principal se rend sans erreur
  expect(screen.getByText('Formulaire')).toBeInTheDocument();
});

test('input nom', () => {
  render(<App />);
  const input = screen.getByLabelText(/Nom de famille/i);
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});

test('input prenom', () => {
  render(<App />);
  const input = screen.getByLabelText(/Prénom/i);
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});

test('input email', () => {
  render(<App />);
  const input = screen.getByLabelText(/Email/i);
  fireEvent.change(input, { target: { value: 'test@test.fr' } });
  expect(input.value).toBe('test@test.fr');
});

test('input date', () => {
  render(<App />);
  const input = screen.getByLabelText(/Date de naissance/i);
  fireEvent.change(input, { target: { value: '2021-09-01' } });
  expect(input.value).toBe('2021-09-01');
});

test('input ville', () => {
  render(<App />);
  const input = screen.getByLabelText(/Ville/i);
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});



