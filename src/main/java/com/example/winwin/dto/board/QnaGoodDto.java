package com.example.winwin.dto.board;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
public class QnaGoodDto {
    private Long userNumber;
    private Long qnaNumber;
}
