import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import {    verifCode, 
            verifNom, 
            verifDate, 
            verifEmail ,
            calculateAge } from '../verifFonction';

describe('Test Unitaire des fonctions', () => {
    test('regex nom valide', () => {
        expect(verifNom("toto")).toBe(true);    
        });

    test('regex nom invalide', () => {
        expect(verifNom("toto1")).toBe(false);      
        });

    test('regex code postal valide', () => {
        expect(verifCode("12345")).toBe(true);    
        });

    test('regex code postal invalide', () => {
        expect(verifCode("1234")).toBe(false);    
        });

    test('regex email valide', () => {
        expect(verifEmail("test@test.fr")).toBe(true);    
        });

    test('regex email invalide', () => {
        expect(verifEmail("testtest.fr")).toBe(false);    
        });

    test('regex date invalide', () => {
        expect(verifDate("2021-52-3")).toBe(false);    
        });

    test('regex date valide mais pas majeur', () => {
        expect(verifDate("2020-5-3")).toBe(false);    
        });

    test('regex date valide et majeur', () => {
        expect(verifDate("2000-01-01")).toBe(true);    
        });
    
    test('check calcul et verif age', () => {
        const dateActuelle = new Date();
        const dateNaissance = new Date('1990-01-01');
        let ageAttendu = dateActuelle.getFullYear() - dateNaissance.getFullYear();
        if (dateActuelle.getMonth() < dateNaissance.getMonth() || (dateActuelle.getMonth() === dateNaissance.getMonth() && dateActuelle.getDate() < dateNaissance.getDate())) {
            ageAttendu--;
        }else{
            ageAttendu;
        }
        const age = calculateAge(dateNaissance);
        expect(age).toEqual(ageAttendu);
         });
});
