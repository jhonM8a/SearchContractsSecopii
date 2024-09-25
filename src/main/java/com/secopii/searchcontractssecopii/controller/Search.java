package com.secopii.searchcontractssecopii.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/search")
public class Search {

    @GetMapping("/contracts/{city}")
    public String getContractByCity(@PathVariable String city){
        return city;
    }
}
