package com.secopii.searchcontractssecopii.request;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.secopii.searchcontractssecopii.repository.model.dao.Busqueda;
import org.springframework.stereotype.Component;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Component
public class Request {
    private URL url;
    private HttpURLConnection httpURLConnection;
    private static final String URL_API = "https://www.datos.gov.co/resource/tb27-zmix.json?departamento_entidad=Meta&estado_del_procedimiento=Activo&adjudicado=No&ciudad_entidad=Villavicencio&$select=entidad,descripci_n_del_procedimiento,duracion,precio_base";


    public List<Busqueda> getJobs(){
        String response = this.makeHttpRequestGet(URL_API, "GET");
        System.out.println(response);
        Gson jsonResponse = new Gson();


        Type busquedaListType = new TypeToken<List<Busqueda>>() {}.getType();
        List<Busqueda> Busqueda = jsonResponse.fromJson(response, busquedaListType);
        return Busqueda;

    }


    private String makeHttpRequestGet(String URL, String methodHTTP){
        String responseResult = null;
        this.prepareRequest(URL, methodHTTP);

        try {
            int responseCode = httpURLConnection.getResponseCode();
            responseResult = this.prepareResponse();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return responseResult;
    }


    private void prepareRequest(String URL, String methodHTTP){
        try {

            url = new URL(URL);

            httpURLConnection  = (HttpURLConnection) url.openConnection();

            httpURLConnection.setRequestMethod(methodHTTP);

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private String prepareResponse(){
        String responseResult = null;
        try {
            int responseCode = httpURLConnection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { // 200 OK
                BufferedReader in = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                responseResult = response.toString();

            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  responseResult;
    }

}
