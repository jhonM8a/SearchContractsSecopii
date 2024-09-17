package com.secopii.searchcontractssecopii.repository;

import com.secopii.searchcontractssecopii.repository.model.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface IUserRepository extends CrudRepository<UserEntity, Integer> {
}
