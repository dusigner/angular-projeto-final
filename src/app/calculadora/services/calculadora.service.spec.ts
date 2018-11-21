import { TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  });

  it('deve garantir que 1 - 4 = -3', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  });

  it('deve garantir que 1 * 4 = 4', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let mutiplicacao = service.calcular(1, 4, CalculadoraService.MUTIPLICACAO);
      expect(mutiplicacao).toEqual(4);
    })
  });

  it('deve retornar 0 para operacao invalida', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  });

});