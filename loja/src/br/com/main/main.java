package br.com.main;

import br.com.classes.veiculo;

public class main {

	public static void main(String[] args) {
		
		
		//iniciando objeto
		veiculo carro = new veiculo();
		carro.nome = "Corsa";
		carro.cor = "Amarelo";
		carro.motor = "16cv";
		carro.velocidade = 100;
		
		System.out.println("Nome:" + carro.nome);
		System.out.println("Cor:" + carro.cor);
		System.out.println("Motor:" + carro.motor);
		System.out.println("Velocidade:" + carro.velocidade);
		
		carro.ligar();
		 
		//teste
		carro.nome = "Land Rover";
		carro.cor = "Cáqui";
		carro.motor = "30cv";
		carro.velocidade = 1000;
				
		System.out.println("Nome:" + carro.nome);
		System.out.println("Cor:" + carro.cor);
		System.out.println("Motor:" + carro.motor);
		System.out.println("Velocidade:" + carro.velocidade);
				
		carro.ligar();
		
	}

}
