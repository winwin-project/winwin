package com.example.winwin.dto.board;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
public class CommunityCommentDto {
    private Long commentNumber;
    private String commentContent;
    private String commentDate;
    private Long userNumber;
    private Long communityNumber;
    private String udStatus;
    private int udCnt;
}
