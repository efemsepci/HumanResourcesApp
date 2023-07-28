package com.efemsepci.HumanResources.controller;

import com.efemsepci.HumanResources.model.UserRegistration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;




@Controller
public class AppController {



    @Autowired
    JdbcUserDetailsManager jdbcUserDetailsManager;

    @GetMapping("/")
    public String showHome(){
        return "home";
    }

    //add a request mapping for /leaders

    @GetMapping("/leaders")
    public String showLeaders(){
        return "leaders";
    }

    //add a request mapping for /systems

    @GetMapping("/systems")
    public String showSystems(){
        return "systems";
    }

    @RequestMapping(value="/register", method = RequestMethod.GET )
    public ModelAndView register(){
        return new ModelAndView("register","user",new UserRegistration());
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ModelAndView processRegister(@ModelAttribute("user") UserRegistration userRegistrationObject) {

        // authorities to be granted
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("ROLE_EMPLOYEE"));

        User user = new User(userRegistrationObject.getUsername(),"{noop}" + userRegistrationObject.getPassword(), authorities);

        jdbcUserDetailsManager.createUser(user);
        return new ModelAndView("redirect:/leaders");
    }


}
