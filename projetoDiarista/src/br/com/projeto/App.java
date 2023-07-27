package br.com.projeto;

import br.com.classes.Atendimento;
import br.com.classes.Cliente;
import br.com.classes.Diarista;

public class App {

	public static void main(String[] args) {
		
		Diarista diarista = new Diarista();
		
		diarista.setNome("Manuella Gonçalves");
		diarista.setTelefone("(11) 96764-4898");
		diarista.setEndereco("Av Palmeiras, N 150");
		diarista.setChavePix("123");
		
		System.out.println("Nome Diarista: " + diarista.getNome());
		System.out.println("Telefone Diarista: " + diarista.getTelefone());
		System.out.println("Endereço Diarista: " + diarista.getEndereco());
		System.out.println("ChavePix Diarista: " + diarista.getChavePix());
		diarista.atender("Kaio");
		//valor na conta do cliente
		System.out.println("Saldo Cliente: " + diarista.getSaldo());
		diarista.depositar(30);
		System.out.println("Novo Saldo: " + diarista.getSaldo());
		diarista.sacar(10);
		System.out.println("Saldo Atual: " + diarista.getSaldo());
		
		System.out.println("=======================================================");
		
		Cliente cliente = new Cliente();
		
		cliente.setNome("Kaio");
		cliente.setTelefone("(11) 98803-8783");
		cliente.setEndereco("Aluizio Magalhães, N 70");
		
		System.out.println("Nome Cliente: " + cliente.getNome());
		System.out.println("Telefone Cliente: " + cliente.getTelefone());
		System.out.println("Endereço Cliente: " + cliente.getEndereco());
		//valor na conta do cliente
		System.out.println("Saldo Cliente: " + cliente.getSaldo());
		cliente.depositar(30);
		System.out.println("Novo Saldo: " + cliente.getSaldo());
		cliente.sacar(10);
		System.out.println("Saldo atual: " + cliente.getSaldo());
		
		System.out.println("=======================================================");
		
		Atendimento atendimento = new Atendimento();
		
		atendimento.setHoras(0);
		System.out.println(atendimento.getHoras());
		
		
		

	}

}
