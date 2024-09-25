package com.secopii.searchcontractssecopii.repository.model.dao;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Busqueda {
    private String entidad;
    private String descripci_n_del_procedimiento;

    private String duracion;

    private  String precio_base;

    public String getEntidad() {
        return entidad;
    }

    public void setEntidad(String entidad) {
        this.entidad = entidad;
    }

    public String getDescripci_n_del_procedimiento() {
        return descripci_n_del_procedimiento;
    }

    public void setDescripci_n_del_procedimiento(String descripci_n_del_procedimiento) {
        this.descripci_n_del_procedimiento = descripci_n_del_procedimiento;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public String getPrecio_base() {
        return precio_base;
    }

    public void setPrecio_base(String precio_base) {
        this.precio_base = precio_base;
    }
}
