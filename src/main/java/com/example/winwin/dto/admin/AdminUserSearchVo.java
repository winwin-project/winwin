package com.example.winwin.dto.admin;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
public class AdminUserSearchVo {
    private String id;
    private String identity;
    private String mainCode;
    private String position;
    private String userStatus;

}
