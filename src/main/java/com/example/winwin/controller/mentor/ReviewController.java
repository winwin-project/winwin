package com.example.winwin.controller.mentor;

import com.example.winwin.dto.mentor.ReviewVo;
import com.example.winwin.service.mentor.MentorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review/*")
public class ReviewController {
    private final MentorService mentorService;

    @GetMapping("/list")
    public List<ReviewVo> reviewList(Long mentorNumber ,HttpServletRequest req){
        Long userNumber = (Long) req.getSession().getAttribute("userNumber");
        return mentorService.findReviewList(mentorNumber, userNumber==null?0:userNumber);
    }


    @PostMapping("/review")
    public String reviewRegister(@RequestBody ReviewVo reviewVo, HttpServletRequest req){
        Long userNumber =(Long) req.getSession().getAttribute("userNumber");
        reviewVo.setUserNumber(userNumber);
        mentorService.reviewRegister(reviewVo);
        return "리뷰 성공!";
    }
}
