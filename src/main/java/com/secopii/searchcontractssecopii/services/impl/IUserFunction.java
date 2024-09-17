package com.secopii.searchcontractssecopii.services.impl;

import com.secopii.searchcontractssecopii.repository.model.entity.UserEntity;

@FunctionalInterface
public interface IUserFunction<T, V> {
    V convert(T userDao);
}
