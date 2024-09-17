package com.secopii.searchcontractssecopii.controller;

import com.secopii.searchcontractssecopii.repository.IUserRepository;
import com.secopii.searchcontractssecopii.repository.model.dao.UserDAO;
import com.secopii.searchcontractssecopii.repository.model.entity.UserEntity;
import com.secopii.searchcontractssecopii.services.impl.IUserFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/user")
public class User {

    private IUserFunction<UserDAO, UserEntity> convertDAOToUserEntity;

    @Autowired
    IUserRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity createUser(@RequestBody UserDAO userDAO){
        //functional interface
        convertDAOToUserEntity = userdao -> new UserEntity(userdao.getFullName(), userdao.getEmail(), userdao.getDepartment(), userdao.getCity());

        userRepository.save(convertDAOToUserEntity.convert(userDAO));

        return new ResponseEntity(HttpStatus.CREATED);
    }

}
