package com.secopii.searchcontractssecopii.repository.model.dao;


public class UserLogin extends UserDAO {
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
