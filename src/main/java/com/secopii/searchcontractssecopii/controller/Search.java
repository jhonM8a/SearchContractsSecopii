package com.secopii.searchcontractssecopii.controller;

import com.secopii.searchcontractssecopii.repository.model.dao.Busqueda;
import com.secopii.searchcontractssecopii.repository.model.dao.ResultSearch;
import com.secopii.searchcontractssecopii.request.Request;
import com.secopii.searchcontractssecopii.services.impl.ISearchResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/v1/search")
public class Search {

    ISearchResult<List<ResultSearch>, List<Busqueda>> searchResult;
    
    @Autowired
    Request request;
    @GetMapping("/contracts/{city}")
    public List<ResultSearch> getContractByCity(@PathVariable String city){
        List<Busqueda> busquedas = request.getJobs();
        searchResult = (busuqeda) ->  {
         List<ResultSearch> resultSearches = new LinkedList<>();

            for (Busqueda busqueda: busquedas) {
                ResultSearch resultSearch = new ResultSearch(busqueda.getDescripci_n_del_procedimiento(),busqueda.getEntidad(), busqueda.getDuracion(), busqueda.getPrecio_base());
                resultSearches.add(resultSearch);
            }
         
          return resultSearches;  
        };


        return searchResult.getInfo(busquedas);
    }
}
