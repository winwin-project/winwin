package com.example.winwin.controller.error;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class CustomErrorController implements ErrorController {

    @GetMapping("/error")
    public String error(HttpServletRequest req){
        Object attribute = req.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);

        if(attribute == null){
            int statusCode = Integer.valueOf(attribute.toString());

            if (statusCode == HttpStatus.NOT_FOUND.value()){
                return "error/404";
            }
        }

        return "error/500";
    }
}
