package com.secopii.searchcontractssecopii.repository.model.dao;

public class ResultSearch {
    private String jobTitle;
    private String agency;
    private String contract;
    private String cash;

    public ResultSearch(String jobTitle, String agency, String contract, String cash) {
        this.jobTitle = jobTitle;
        this.agency = agency;
        this.contract = contract;
        this.cash = cash;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }

    public String getContract() {
        return contract;
    }

    public void setContract(String contract) {
        this.contract = contract;
    }

    public String getCash() {
        return cash;
    }

    public void setCash(String cash) {
        this.cash = cash;
    }
}
