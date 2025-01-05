package com.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.Products;
import com.backend.repositories.ProductRepository;

@ Service
public class P_ServiceImplement implements P_Services{
	
	@Autowired
	ProductRepository productRepository;
	
	public P_ServiceImplement(ProductRepository productRepository) {
		this.productRepository= productRepository;
	}

	@Override
	public Products add(Products products) {
		return productRepository.save(products);
	}

	@Override
	public List<Products> getAll() {
		return (List<Products>)productRepository.findAll();
	}

	@Override
	public Products getOne(Integer product_id) {
		Optional<Products> op = productRepository.findById(product_id);
		return op.get();
	}

	@Override
	public void delete(Integer product_id) {
		productRepository.deleteById(product_id);
	}

	@Override
	public Products update(Products products) {
		return productRepository.save(products);
		
	}

}
