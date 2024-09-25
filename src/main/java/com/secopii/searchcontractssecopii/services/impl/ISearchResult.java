package com.secopii.searchcontractssecopii.services.impl;
@FunctionalInterface
public interface ISearchResult<T,V> {

    T getInfo(V busuqedas);

}
